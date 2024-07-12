import './Cardstyle.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import LatestNews from './LatestNews';

export default function Latest(){
    
    
    const [arr,setArr]=useState([]);
    
    useEffect(()=>{
       Axios.get("https://samplemern-backend.onrender.com/newsRoute/")
        .then((res)=>{
            if(res.status===200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err)) 
    })

    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <LatestNews obj={val}/>
        })
    }

       
    return(
        <div className="container-fluid" >



        <div id="carouselExampleCaptions" class="carousel slide"  data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/new2.jpg" class="d-block w-100" alt="error"/>
      <div class="carousel-caption d-none d-md-block">
        <h2 className="conten">Biden tells Hill Democrats he is staying in the race</h2>
        <p className="cont">President Joe Biden has informed Hill Democrats of his decision to stay in the 2024 presidential race. This announcement reaffirms his commitment to seeking re-election despite concerns about his age and approval ratings.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/new3.jpg" class="d-block w-100" alt="error"/>
      <div class="carousel-caption d-none d-md-block">
        <h2 className="conten">India’s Modi makes first Russia visit since Ukraine invasion</h2>
        <p className="cont">Indian Prime Minister Narendra Modi has made his first visit to Russia since the Ukraine invasion, marking a significant diplomatic engagement. The visit underscores India's balancing act in maintaining relations with both Western nations and Russia amidst the ongoing conflict.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/new4.webp" class="d-block w-100" alt="error"/>
      <div class="carousel-caption d-none d-md-block">
        <h2 className="conten">India lifts second T20 WC title after 17 years</h2>
        <p className="cont">
        India has won its second T20 World Cup title, ending a 17-year wait since their first triumph in 2007. The team showcased exceptional performance throughout the tournament, culminating in a thrilling final. This victory cements India's position as a powerhouse in international cricket.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<h1 className="text-center mt-3 px-4  text-light ">Latest<span className="badge bg-danger text dark mx-3">News</span></h1>

        <div className="row">
            {ListItems()}
        </div>
        </div>
    )
}

