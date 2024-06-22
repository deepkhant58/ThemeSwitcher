import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, createPost, editPost, getPost } from "../Redux/Actions/CrudAction";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updatePost } from "../Redux/Slices/CrudSlice";

function View() {
  const postData = {
    title: "",
    body: "",
  };
  const [sentData, setSendData] = useState(postData);

  const handleChange = (e) => {
    setSendData({ ...sentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(createPost(sentData));
    setSendData(postData);
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data) ;

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(DeletePost(id));
  };


  
  return (
    <div>
      <h1>add +</h1>

      <h1>title</h1>
      <input onChange={handleChange} value={sentData.title} name="title" />
      <h1>body</h1>
      <input onChange={handleChange} value={sentData.body} name="body" />

      <button onClick={handleSubmit}>submit</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.title}</td>
              <td>{detail.body}</td>
              <td>
                <button onClick={() => handleDelete(detail.id)}>Delete</button>
                <Link to={`update/${detail.id}`} >Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default View;
