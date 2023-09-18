import Table from './Table'
import './App.css';
import Header from './Header'
import {
  Routes,
  Route
  } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const[user,setUser]=useState([]);
  const[product,setProduct]=useState([]);

  const getUser=async()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();
    setUser(result);
    console.log("method called");
  }
  const getproduct=async()=>{
    let response = await fetch('https://dummyjson.com/products');
    let result = await response.json();
    // const search = result.products.filter((item)=>item.name.toLowerCase().includes(query));
    setProduct(result.products);
    // console.log(result.products);
  }
  useEffect(()=>{
    getUser();
    getproduct();
  },[]);
  return (
    <div>
      <Header />
      
      <Routes>
          <Route path='/' element={<Table data={user} />} />
          <Route path='products' element={<Table data={product}/>} />
      </Routes>
    </div>
  );
}
export default App;
