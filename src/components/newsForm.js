import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'


export default function NewsForm(Props){

    const [url,setUrl] = useState(Props.urlValue);
    const [headline,setHeadline] = useState(Props.headlineValue);
    const [source,setSource] = useState(Props.sourceValue);
    const [category,setCategory] = useState(Props.categoryValue);

    useEffect(()=>{
        setUrl(Props.urlValue);
        setHeadline(Props.headlineValue);
        setSource(Props.sourceValue);
        setCategory(Props.categoryValue);
    },[Props.urlValue,Props.headlineValue,Props.sourceValue,Props.categoryValue]);
    const arr=[url,headline,source,category]

    const handleClick=()=>{
        Props.getState(arr);
    }
    return(
        
        <div style={{maxWidth:"40%",margin:"20px auto"}}>
            <NavLink to="late/*">
                <button className="btn btn-info" type="button">Back</button>
            </NavLink> 
          
            <input defaultValue={Props.urlValue} onChange={(event)=>setUrl(event.target.value)} class="form-control my-3" placeholder="enter source URL" required/>
            <input defaultValue={Props.headlineValue} onChange={(event)=>setHeadline(event.target.value)} class="form-control my-3" placeholder="enter headline" />
            <input defaultValue={Props.sourceValue} onChange={(event)=>setSource(event.target.value)} class="form-control my-3" placeholder="enter source" />
            <input defaultValue={Props.categoryValue} onChange={(event)=>setCategory(event.target.value)} class="form-control my-3" placeholder="enter category" />
            
            <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto">{Props.children}</button>

        </div>
    )
}