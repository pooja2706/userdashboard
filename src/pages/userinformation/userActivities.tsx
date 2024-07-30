// import React from 'react'
import {getDatafromId, getPostData} from './userProfile'
import { useParams } from 'react-router-dom';
import { Posts } from '../../models/posts';
import '../../style/userActivities.css';
import PostsCard from '../../component/postscard'
import { UserData } from '../../models/userdata';

interface IParams{
    id: number
}

const userActivities = () => {
    const {userid} = useParams<IParams | any>()
    let postdata: Posts[]|undefined =getPostData(Number(userid))
    let userinfo: UserData|undefined=getDatafromId(Number(userid))
    
    return (
        <div className='user-posts'>
        {postdata && postdata.map((info)=>(
            <PostsCard title={info.title} body={info.body} username={userinfo?.username}/>
        ))}
        </div>
    )
}

export default userActivities
