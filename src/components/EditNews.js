import { useParams } from "react-router-dom";
import NewsForm from "./newsForm";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function EditNews(){

    const {id} =useParams();
    const[initialValue,setInitialValue]=useState({
        url:"",
        headline:"",
        source:"",
        category:""
    });
    const [newData,setNewdata]=useState([]);

    useEffect(()=>{
        Axios.get("https://samplemern-backend.onrender.com/newsRoute/updatenews/"+id)
        .then((res)=>{
            if(res.status===200){
                
                const {url,headline,source,category}=res.data;
                setInitialValue({url,headline,source,category});

            }else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getState=(childData)=>{
        setNewdata(childData);
    }

    const handleSubmit=()=>{
        const data ={
            url:newData[0],
            headline:newData[1],
            source:newData[2],
            category:newData[3]

        }
        Axios.put("https://samplemern-backend.onrender.com/newsRoute/updatenews/"+id,data)
        .then((res)=>{
            if(res.status===200){
                alert("Recored updated successfully")
                window.location.reload();
            }    
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <NewsForm getState={getState}
                      urlValue={initialValue.url}
                      headlineValue={initialValue.headline}
                      sourceValue={initialValue.source}
                      categoryValue={initialValue.category}>
                        Update News
                      </NewsForm>
        </form>
    )
}