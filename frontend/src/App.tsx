import React from 'react';
import './App.css';
import {About} from "./header/About"
import Contact from "./header/Contact"
import Home from "./header/Home"
import {Link, Route, Routes} from 'react-router-dom'
import {useState, useEffect, useCallback} from "react"
function App(): JSX.Element {
  const [data, setData] = useState<Array<Data> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState <string|null>(null)

  type mapFunction = (item:DataBefore)=>Data
  
  interface Result{
    episode_id: number;
    title: string;
    opening_crawl: string;
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

  // const getData = useCallback((url: RequestInfo | URL): Promise<DataBefore> => {
  //   setIsLoading(true)
  //   return fetch(url).then(res => res.json())
  // }, [])

  const getData = 
    useCallback(async()=>{
      setIsLoading(true)
      try{
        const response = await fetch('https://swapi.dev/api/films/');
        if(!response.ok){
          throw new Error(response.statusText);
        }
        const data = await response.json()

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
        setIsLoading(false)
        }
        catch (error:any){
          setError(error.message)
        }
      },[])
    
      useEffect(()=>{
        getData();
       
      },[])
  
  

// useEffect(()=>{
 
  // const url = 'https://swapi.dev/api/films/'
  // getData (url)
  // .then(data=>{
    
  //   if (Array.isArray(data.results)){
  //     const finalData = data.results.map((item:DataBefore):
  //     Data =>{
  //       return {
  //         id: item.episode_id,
  //         title: item.title,
  //         body: item.opening_crawl,
  //       }
  //     }
  //     )
  //     setData(finalData)
  //   }
    
  // })
  // .catch(error=>console.log(error.message))
  // setIsLoading(false)
// },[])

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
    <div>
    {isLoading && <div>Loading...</div>}
    {!isLoading && error && <p>{error}</p>}
    </div>
    
    </>
  );
}

export default App;
