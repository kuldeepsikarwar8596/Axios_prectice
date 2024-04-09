import axios from 'axios';
import React, { useState } from 'react'

function PostApi() {
    const data = {fname: "" , lastname : " "};
    const [inputData, setInputData]=useState(data)

    const handleData =(e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <> 
    <h1>Post Api</h1>
    <label>First Name : </label>
    <input type="text" name='fname' value={inputData.fname} onChange={handleData}/><br />
    <label>Last Name : </label>
    <input type="text" name='lastname' value={inputData.lastname} onChange={handleData}/> <br />

    <button onClick={handleSubmit}> Submit</button>

    </>
  )
}

export default PostApi