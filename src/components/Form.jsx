import { use, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
const [name,setName]=useState(()=> localStorage.getItem("name") || "");
const [service,setService]=useState(()=> localStorage.getItem('service') || "");
useEffect(()=>{
  localStorage.setItem("name",name);
},["name" ,name]); 
  useEffect(()=>{
    localStorage.setItem("service", service);
  },["service", service]);
    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} onChange={(e)=> setName(e.target.value)}/>
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} onChange={(e)=> setService(e.target.value)}/>

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form