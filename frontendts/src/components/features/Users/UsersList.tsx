import React from 'react'
import { User } from './type'
import CardUser from './CardUser'

const UsersList = ({users,del,fav,delFav}:{users:User[],del:(id:string)=>void,fav:(user:User)=>void,delFav:(id:string)=>void}) => {
  return (
    <div className='UserList'>
      {users.map(user=>
      <CardUser key={user.id}
      user = {user} del={del} delFav={delFav} fav={fav} status={'UsersList'}/>)}
    </div>
  )
}

export default UsersList