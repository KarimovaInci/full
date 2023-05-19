import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Section4.scss";

const Section4 = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8585/add").then((res)=>{
      setData(res.data)
    })
  },[data])

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8585/add/${id}`)
  }

  return (
    
    <>
    
      <div className="section4">
        <div className="section__title">
          <div className="section4__title__text1">INDUSTRY WE OFFER</div>
          <div className="section4__title__text2">
            <h4> We work with global brands</h4>
          </div>
          
        </div>
        <div className="section4__cards">
        {
          data.map((item,index)=>(

            <div className="section4__cards__card" key={index}>
                <div className="section4__cards__card__img">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog6.jpg.webp" alt="" />
                </div>
                <p className="brend">{item.brend}</p>
                <p className="price">{item.price}$</p>
                <p className="content">{item.context}</p>
                <button onClick={(e)=>{
                  e.preventDefault()
                  handleDelete(item._id)

                }}>Delete</button>
            </div>

          ))
        } 
        </div>
      </div>
    </>
  );
};

export default Section4;
