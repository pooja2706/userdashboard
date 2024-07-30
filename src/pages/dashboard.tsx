// import React from 'react'
import {lazy} from 'react';

import {UserData} from '../models/userdata';


import React from 'react';
import '../style/dashboard.css'
import Usercard from '../component/usercard';
// import Descriptionsection from '../component/descriptionsection';
import { Address } from '../models/address';
import { Geo } from '../models/geo';
import { Company } from '../models/company';

// const Card = lazy( ()=>import ('../component/card'))

const dashboard = () => {
  let geodemo: Geo={
    lat: '44',
    lng: '67'
  }
  let companydemo: Company={
    name: 'poojaenter',
    catchPhrase: 'dd',
    bs: 'bb'
  }
  let addressdemo: Address={
    street: "pp",
    suite: '',
    city: 'jj',
    geo: geodemo,
    zipcode: ''
  }

  let userapilink='https://jsonplaceholder.typicode.com/users'
    let [userData, setuserData]=React.useState<UserData[]>();
    React.useEffect(()=>{
      fetchdata();
    })
    const fetchdata=async ()=>{
        try{
            const response =await fetch(userapilink)
            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
              }
              let data = await response.json();
              console.log('in fetchdata');
              setuserData(data)
              console.log(userData);
              
        }
        catch (err) {
            console.log('error occured');
        }
            
    }
  
  return (
    <div className='dashboard-template'>
      <div className="user-info">
        {userData && userData.map((info, index)=>(
        <Usercard id={info.id} name={info.name} email={info.email} username={info.username} address={info.address} company={info.company} website={info.website} phone={info.phone}/>
        ))}
      </div>
      
    </div>
  )
}

export default dashboard
