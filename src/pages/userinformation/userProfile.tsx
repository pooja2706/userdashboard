import React from 'react'
import { useParams } from 'react-router-dom'
import { UserData } from '../../models/userdata'
import { Posts } from '../../models/posts'
import '../../style/userProfile.css'
interface IParams{
  id: number
}
const userProfile= () => {
  const {userid} = useParams<IParams | any>()
  console.log(userid);
  const userdata: UserData |undefined =getDatafromId(Number(userid))
  // window.location.reload()
  const curruserpost: Posts[] |undefined =getPostData(userdata?.id)
  
  return (
    <div className="userpage-template">
      {/* <div className="header-div"> */}
        <div className="about-me">
          <div className='name'>{userdata?.name}</div>
          <div className="username">@{userdata?.username}</div>
          <div className="postcount">Posts: {curruserpost?.length}</div>
        </div>
        <div className="detail-card">
          <div className="header-div">
            Contact
          </div>
          <div className="details">
            <div className="heading">Phone: &ensp; </div>
            <div className="values">{userdata?.phone}</div>
          </div>
          <div className="details">
          <div className="heading">E-mail: &ensp;</div>
          <div className="values">{userdata?.email}</div>
          </div>
          <div className="details">
          <div className="heading">Address: &ebsp;</div>
          <div className="values">{userdata?.address.suite}, {userdata?.address.street}, {userdata?.address.city}, {userdata?.address.zipcode} </div>
          </div>
          <div className="details">
            <div className="heading">Geolocation: &ensp;</div>
            <div className="values">{userdata?.address.geo.lat}, {userdata?.address.geo.lng}</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="header-div">Company</div>
          <div className="details">
            <div className="heading">Name: &ensp; </div>
            <div className="values">{userdata?.company.name}</div>
          </div>
          <div className="details">
            <div className="heading">Catch Phrase: &ensp; </div>
            <div className="values">{userdata?.company.catchPhrase}</div>
          </div>
          <div className="details">
            <div className="heading">Bs: &ensp; </div>
            <div className="values">{userdata?.company.bs}</div>
          </div>
          <div className="details">
            <div className="heading">Website: &ensp; </div>
            <a className="values" href={"https://"+userdata?.website} target='blank'>{userdata?.website}</a>
          </div>
          
          
        </div>
      {/* </div> */}
    </div>
  )
}

export function getDatafromId(id: number){
  let userapilink='https://jsonplaceholder.typicode.com/users'
  let [userData, setuserData]=React.useState<UserData>();
  React.useEffect(()=>{
    fetchdata();
    // getPostData(userData?.id)
  })

  const fetchdata=async ()=>{
      try{
          const response =await fetch(userapilink)
          if (!response.ok) {
              throw new Error(`HTTP error: Status ${response.status}`);
            }
            let data = await response.json();
            // console.log('in fetchdata');
            setuserData(data[id-1])         
            // console.log(userData);
            
      }
      catch (err) {
          console.log('error occured');
          console.log(err);
          
      }
          
  }
  return userData;
}

export function getPostData(userid: number | undefined){
  let postapilink='https://jsonplaceholder.typicode.com/posts'
  let [postData, setpostData]=React.useState<Posts[]>();
  React.useEffect(()=>{
    fetchdata();
  })
  const fetchdata=async ()=>{
      try{
          const response =await fetch(postapilink)
          // console.log(response);
          
          if (!response.ok) {
              throw new Error(`HTTP error: Status ${response.status}`);
            }
            let data: Posts[] = await response.json();
            let currUserPost: Posts[]=[];
            // console.log('in fetchdata');
            data.map((post, index)=>{
              // console.log(post); 
              if(post.userId==userid){
                currUserPost.push(post)
              }
            })
            setpostData(currUserPost)
            
      }
      catch (err) {
          console.log('error occured');
          console.log(err);
          
      }
          
  }
  return postData
}
export default userProfile
