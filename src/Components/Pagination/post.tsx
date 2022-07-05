import React,{FC} from 'react'

const Post:FC<any> = (posts) => {
  return (
    <div>{posts.map((item:any)=>{
        console.log(item.id)
    })}</div>
  )
}

export default Post