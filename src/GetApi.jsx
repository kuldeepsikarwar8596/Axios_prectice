import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function GetApi() {
 const [mydata, setMyData] = useState([])
 const [isError, setIsError] = useState("")

  //note: Using Promises
  // useEffect(() => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setMyData(res.data))
  //   .catch((error) => 
  //    setIsError(error.message)
  //   );
  // }, []);

  // NOTE: using Async Await

  
  const getApiData = async()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setMyData(res.data);    
    } catch (error) {
      setIsError(error.message)
    }
    
  };

  useEffect(()=>{
    getApiData();
  },[]);

  return (
    <>
       <h1> Axios Tutorial</h1>

       {isError!= "" && <h2>{isError}</h2>}
       <div className="grid">

      {mydata.slice(0,25).map((post)=>{
        const {id, title, body} = post;
        return <div className='card' key={id}>
          <h2>{title.slice(0,15).toUpperCase()}</h2>
          <p>{body.slice(0, 150)}</p>
        </div>
        
      })}
      </div>
    </>
  )
}

export default GetApi
