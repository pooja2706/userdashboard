import React, { lazy, MouseEventHandler, useEffect } from 'react'
import '../style/usercard.css'
import { UserData } from '../models/userdata'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
// import {BrowserRouter as Router, Route} from "react-router-dom";
// const UserProfile = lazy(()=>import ("../pages/userinformation/userProfile"));

let navigate: NavigateFunction
const usercard = (cardValue: UserData) => {
 navigate = useNavigate();
//  navigate('')
// useEffect(() => window.location.hash = '', []);
  return (
    <div className="user-card">

      {/* <Link to={'/user/'+cardValue.id } > */}
      <a href={'user/'+cardValue.id}>
        <div className="card-template" 
      // onClick={cardClickEvent(cardValue.id)}
      key={cardValue.id}>
        <div className="name">{cardValue.name}
        </div>
        <div className="username">@{cardValue.username}</div>
        <div className="contact">
        <a className='website' href={"https://"+cardValue?.website} target='blank'>
        
        </a>
        <a className='open-bio' href={'posts/'+cardValue.id}>
        </a>

        </div>
      </div>
    {/* </Link> */}
    </a>
    </div>
    
    
    
  )
}

// function cardClickEvent(id: number){
//     console.log(id);
    
//     console.log('/user/'+id);
//     useEffect(()=>{
//       navigate('/user/'+id)

//     })
//     return (event: React.MouseEvent) => {
//     // ...do stuff...
    
//     event.preventDefault();
//   }
// }
export default usercard
