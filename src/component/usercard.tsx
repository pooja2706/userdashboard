import '../style/usercard.css'
import { UserData } from '../models/userdata'

// Card template Component. Dashboard page uses this component to display user's card

const usercard = (cardValue: UserData) => {
  return (
    <div className="user-card">
      <a href={'user/'+cardValue.id}>
        <div className="card-template" key={cardValue.id}>
          <div className="name">{cardValue.name}</div>
          <div className="username">@{cardValue.username}</div>
          <div className="contact">
            <a className='website' href={"https://"+cardValue?.website} target='blank'></a>
            <a className='open-bio' href={'posts/'+cardValue.id}></a>
          </div>
        </div>
      </a>
    </div> 
  )
}

export default usercard
