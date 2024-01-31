import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import "../Dashboard/Dashboard.css"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'

export default function Dashboard() {
  const [Message,setMessage] = useState("")
  const navigation = useNavigate()
  useEffect(()=>{
    axios.defaults.withCredentials = true;
    axios.get("https://express-authentication-xv3i.onrender.com/Dashboard",)
    .then((res)=>{
      console.log(res)
      if(res.data.verification){
        setMessage("Welcome " + res.data.value.username)
      }
      else{
        navigation("/")  
      }})
    .catch(err=>{
      navigation("/")
    })
  },[])

  function logout(){
    axios.get("https://express-authentication-xv3i.onrender.com/logout")
    .then(()=>{
      navigation("/")
    })
  }

  return (
    <div className='container cond12'>
      <Header/>
      <br />
      <br />
      <br />
      <br />
      <h1>{Message}</h1>
      <button className='btn btn-danger' onClick={()=>{
        logout()
      }}>logout</button>
    </div>
  )
}
