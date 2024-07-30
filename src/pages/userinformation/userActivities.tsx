import React from 'react'
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
    console.log(userid);

    let postdata: Posts[]|undefined =getPostData(Number(userid))
    let userinfo: UserData|undefined=getDatafromId(Number(userid))
    console.log(postdata);
    
    return (
        <div className='user-posts'>
        {postdata && postdata.map((info, index)=>(
            <PostsCard title={info.title} body={info.body} username={userinfo?.username}/>
        ))}
        </div>
    )
}

export default userActivities
