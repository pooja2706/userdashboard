import React from 'react'
import { Posts } from '../models/posts'

interface PostsDisplay{ //contains format of user's post structure
    username: string|undefined;
    title: string,
    body: string

}
const postscard = (postdata: PostsDisplay) => {
  return (
    <div>
      <div className="card-template">
        <div className="title">
            {postdata.title}
        </div>
        <div className="body">
            {postdata.body}
        </div>
        <div className="username">
            @{postdata.username}
        </div>
      </div>
    </div>
  )
}

export default postscard
