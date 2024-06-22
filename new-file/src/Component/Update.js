import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { dataSuccess, updatePost } from '../Redux/Slices/CrudSlice';

function Update() {
const dispatch= useDispatch();
const {id}=useParams();
const navigate=useNavigate()
const [value,setValue]=useState({
  id:id,
  title:'',
  body:'',
})

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res=>{
    setValue({...setValue,title:res.data.title,body:res.data.body})
  }).catch(err=>console.log(err))
},[id])

const handleSubmit = (e) => {
  e.preventDefault();
  axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, value)
    .then(res => {
      // Update state with the newly fetched data
      setValue(res.data);
      // Navigate or perform any other actions as needed
      navigate('/');
      // Dispatch action to update the post in Redux state
      dispatch(updatePost(id,value));
    
      console.log(res.data)
    })
    .catch(err => console.log(err));
};


  return (
    <div>
      
      <h1>
      Update

      </h1>

<form>
  <label>title</label>
  <input type='text' value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})} name='title'/>
  <label>Body</label>
  <input value={value.body} onChange={(e)=>setValue({...value,body:e.target.value})} name='body'/>
  <button onClick={handleSubmit}>
    update
  </button>
</form>

    </div>
  )
}

export default Update