import React from 'react'
import './Card1.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import { AiFillStar } from 'react-icons/ai';

import { useState } from 'react';
function Card1() {
    const data = [
        { id: 1, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/Mango-2.png' ,name:'Sea Salt Caramel' ,text:'The unforgettable taste of caramel salt in every bite.',price:'123.00',Rating:'4.5'},
        { id: 2, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Indian-Flavours.png',name:'Dry Fruit Overload' ,text:'The richness of Kaju, Badams, Pista, and Kishmish in every scoop.',price:'132.00',Rating:'4.4'},
        { id: 3, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/SP-SS-Caramel.png',name:'Madagascar Chocolate' ,text:'Rich and creamy dark chocolate with a melt in the mouth experience',price:'129.00',Rating:'4.6'},
        { id: 4, pic:'https://nicicecreams.com/wp-content/uploads/2022/07/IMG-10.png' ,name:'Sugarless Tender Coconut' ,text:'Light ice cream loaded with the sweetness of tender coconuts, but with less sugar.',price:'128.99',Rating:'4.3'},
        { id: 5, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Super-Premium.png',name:'Apricot' ,text:'World’s most premium dried fruit in every scoop of rich and creamy ice cream.',price:'259.99',Rating:'3.9'},
        { id: 6, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png' ,name:'French Vanilla' ,text:'No extracts or essence, an ice cream loaded with vanilla.',price:'199.99',Rating:'4.0'},
        { id: 7, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/Fruit-N-Nut-1.png' ,name:' Caramel' ,text:'The unforgettable taste of caramel salt in every bite.',price:'179.69',Rating:'4.8'},
        { id: 8, pic: 'https://nicicecreams.com/wp-content/uploads/2022/07/new-scaled.jpg',name:'Dry Fruit' ,text:'The richness of Kaju, Badams, Pista, and Kishmish in every scoop.',price:'145.00',Rating:'4.7'},
        { id: 9, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Sugarless-Coconut-1.png',name:'Coconut Chocolate' ,text:'Rich and creamy dark chocolate with a melt in the mouth experience',price:'231.49',Rating:'4.2'},
        { id: 10, pic:'https://nicicecreams.com/wp-content/uploads/2022/07/IMG-10.png' ,name:' Coconut Cream' ,text:'Light ice cream loaded with the sweetness of tender coconuts, but with less sugar.',price:'150.00',Rating:'4.9'},
        { id: 11, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Super-Premium.png',name:'Apricot Premium' ,text:'World’s most premium dried fruit in every scoop of rich and creamy ice cream.',price:'120.00',Rating:'4.1'},
        { id: 12, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png' ,name:'Light Vanilla' ,text:'No extracts or essence, an ice cream loaded with vanilla.',price:'108.5',Rating:'4.6'},
        
      ]; 

      const[search,setSearch]=useState('');
      const handleInputChange=(e)=>{
        setSearch(e.target.value)
      }
     
      const fd=data.filter((items)=>{
        const itemSearched=search.toLowerCase();
        return(
       
            items.name.toLowerCase().includes(itemSearched) ||
            items.price.toString().includes(itemSearched)||
            items.id.toString().includes(itemSearched)||
            items.Rating.toString().includes(itemSearched)

          
        );
      });
      




      const rows = fd.map((item) => (
       
       
      <div className='cardcontainer'>
       
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={item.pic} fluid alt='...'style={{height:'13em'}}  />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <h5 style={{color:"darkblue"}} >{item.name}</h5>
          <p>Price : <span style={{color:'green'}}> {item.price}₹</span></p>
          <h6 style={{color:'blueviolet'}} >   {item.text}</h6>
          <p>Rating :  <span style={{color:'gold'}}>{item.Rating} <AiFillStar/></span> </p>
          <MDBBtn  color='dark'>Buy Now</MDBBtn>
        </MDBCardBody>
    
    </div>
   


      ));
  return (
    <div >
      <p style={{position:'relative',left:'50em',width:'20em',margin:'1em'}}>
       <label htmlFor="">Search: </label> <input type="text" name="" value={search} onChange={handleInputChange} id=""  />
       </p>
    <div className='GridCardcontainer' >

    {rows}

    </div>
    
     
  
    </div>
  )
}

export default Card1
