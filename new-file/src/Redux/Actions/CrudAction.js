import axios from "axios"
import { createpost, dataSuccess, deletePost, updatePost } from "../Slices/CrudSlice"

export const getPost =()=> async dispatch =>{
    try{
        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            dispatch(dataSuccess(res.data))
        })
    }
    catch(error){
        console.log("Failed to fetch posts:",error)
    }
}


export const createPost =(sentData)=> async dispatch =>{
    try{
        await axios.post("https://jsonplaceholder.typicode.com/posts",sentData)
        .then((res)=>{

            dispatch(createpost(res.data))
        })
    }
    catch(error){
        console.log("Failed to fetch posts:",error)
    }
}


export const DeletePost =(id)=> async dispatch =>{
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      

            dispatch(deletePost(id))
   
    }
    catch(error){
        console.log("Failed to fetch posts:",error)
    }
}
// In your slice file

