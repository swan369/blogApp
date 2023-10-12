import React from 'react';
import './App.css';
import {About} from "./header/About"
import Contact from "./header/Contact"
import Home from "./header/Home"
import {Link, Route, Routes} from 'react-router-dom'
import {useState, useEffect} from "react"
function App(): JSX.Element {
  const [data, setData] = useState<Array<Data> | undefined>([{id:0,title:"",body:""}])
  
  
  type mapFunction = (item:DataBefore)=>Data
  
  interface Result{
    episode_id: number;
    title: string;
    opening_crawl: string;
    // director: string;
    // producer:string;
    // release_date: string;
    // characters: Array<string>;
    // planets: Array<string>;
    // starships: Array<string>;
    // vehicles: Array<string>;
    // species: Array<string>;
    // created: string;
    // edited: string;
    // url: string;
  }
  interface DataBefore  {
    episode_id: number;
    title: string;
    opening_crawl: string;
    results?: Array<Result>
  }

 interface Data{
  id: number
  title: string,
  body: string,
  // map?: mapFunction
  }

 function getData (url:RequestInfo | URL): Promise<DataBefore>{
   return fetch(url).then(res => res.json())
 }

useEffect(()=>{
  const url = 'https://swapi.dev/api/films'
  getData (url)
  .then(data=>{
    
    if (Array.isArray(data.results)){
      const finalData = data.results.map((item:DataBefore):
      Data =>{
        return {
          id: item.episode_id,
          title: item.title,
          body: item.opening_crawl,
        }
      }
      )
      setData(finalData)
    }
  })
  .then(error=>console.log(error))

},[data])

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <ul className = "nav">
      <li className = "nav-item">
        <Link className = "nav-link" to="/about">About</Link>
      </li>
      <li className = "nav-item">
        <Link className = "nav-link" to = "/">Home</Link>
      </li>
      <li className = "nav-item">
        <Link to ="contact" className = "nav-link">Contact</Link>
      </li>
      <form className="d-flex justify-content-center" >
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </ul>
    </nav>
    <Routes>
      <Route path= '/' element = {<Home newData = {data}/>} />
      <Route path = 'about' element = {<About/>}/>
      <Route path ='contact' element = {<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
