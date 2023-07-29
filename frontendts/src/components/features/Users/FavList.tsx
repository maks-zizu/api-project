import React from 'react'
import CardUser from './CardUser'
import { User } from './type'

const FavList = ({users,del,fav,delFav}:{users:User[],del:(id:string)=>void,fav:(user:User)=>void,delFav:(id:string)=>void}) => {
  return (
    <>
    <h2>Мои любимчики</h2>
    <div className='FavList'>
    {users.map(user=>
    <CardUser key={user.id}
    user = {user} del={del} delFav={delFav} fav={fav} status={'любимчик'}/>)}
  </div>
  </>
  )
}

export default FavList