import { useState } from "react";
import NewsForm from "./newsForm";
import Axios from "axios";


export default function CreateNews(){

    const [arr,setArr] =useState([]);
    
    const getState =(childData)=>{
        setArr(childData);
    }

    const handlesubmit=()=>{
        const data ={url:arr[0],headline:arr[1],source:arr[2],category:arr[3]}
        Axios.post("https://samplemern-backend.onrender.com/newsRoute/createnews/",data)
        .then((res)=>{
            if(res.status===200){
                alert("record added successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }



    return(
        <form onSubmit={handlesubmit}>
            <NewsForm getState={getState}
                      urlValue=""
                      headlineValue=""
                      sourceValue=""
                      categoryValue="">
                Create News
            </NewsForm>
        </form>
    )
}