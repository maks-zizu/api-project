import React from 'react'
import { User } from './type'

const CardUser = ({user,del,fav,delFav,status}:{user:User,del:(id:string)=>void,fav:(user:User)=>void,delFav:(id:string)=>void,status:string}) => {
  return (
    <div className='UserCard'>        
      <h1>{user.name}</h1>
      <img src={user.avatar} alt="avatar" />
      <h2>{user.email}</h2>
      <h2>{user.gender}</h2>
      <div className='btn_main'>
      {status !== 'любимчик' ?
        <>
        <button className='btn_card' onClick={()=>del(user.id)}>Уволить</button>
        <button className='btn_card' onClick={()=>fav(user)}>Любимчик</button>
        </>
        :
        <button className='btn_card' onClick={()=>delFav(user.id)}>Уже не любимчик</button>
      }
      </div>
    </div>
  )
}

export default CardUser