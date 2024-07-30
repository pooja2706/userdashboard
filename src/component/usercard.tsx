// import React, { lazy, MouseEventHandler, useEffect } from 'react'
import '../style/usercard.css'
import { UserData } from '../models/userdata'
// import {BrowserRouter as Router, Route} from "react-router-dom";
// const UserProfile = lazy(()=>import ("../pages/userinformation/userProfile"));

const usercard = (cardValue: UserData) => {

  return (
    <div className="user-card">
      <a href={'user/'+cardValue.id}>
        <div className="card-template" 
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

export default usercard
