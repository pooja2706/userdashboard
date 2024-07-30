import {UserData} from '../models/userdata';

import React from 'react';
import '../style/dashboard.css'
import Usercard from '../component/usercard';


const dashboard = () => {
  
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
              setuserData(data)
              
        }
        catch (err) {
            console.log('error occured');
        }
            
    }
  
  return (
    <div className='dashboard-template'>
      <div className="user-info">
        {userData && userData.map((info)=>(
        <Usercard id={info.id} name={info.name} email={info.email} username={info.username} address={info.address} company={info.company} website={info.website} phone={info.phone}/>
        ))}
      </div>
      
    </div>
  )
}

export default dashboard
