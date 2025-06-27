import  { useEffect, useState } from "react";
import axios from 'axios'

function Apicalling() {

   const [allProduct,setAllproduct]= useState([])

  useEffect(() => {
    async function calling() {
      console.log("before Api");
      

      const API = "https://dummyjson.com/products";
     try {
       const data = await axios.get(API);
      // console.log("product api",data?.data);
      setAllproduct(data?.data?.products)
     } catch (err) {
      console.log("API Error:", err.message);
     }
      
    }
    calling();
  }, []);


  return allProduct;
}

export default Apicalling;
