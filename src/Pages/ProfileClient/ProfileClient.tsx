import React from 'react'
import BottomBar from '../../Components/BottomBar/BottomBar'
import './ProfileClient.scss'
interface head {
  name: string
  address: {
    province: string
    state: string
  }
  profession?: string
  status: 'client' | 'vendor'
  bio?: string
}
interface User {
  user: head
}

function Head({ user }: User) {
  return (
    <div className='headClient'>
      <div className='a'>
        <div className='img'>
          <img width={100} alt='profile' src='https://i.pinimg.com/564x/60/36/b8/6036b814ffe8ace9122cb4cfb65a2e34.jpg' />
        </div>
        <div className='location'>
          <p>Province, State</p>
          <p>Profession</p>
        </div>
      </div>
      <div className='b'>
        <h2>{user.name}</h2>
        <button>{user.status}</button>
        <p>{user.bio}</p>
      </div>
    </div>);
}


function ItemsProject() {
  return (
    <div className='items'>
      <div className='date'>
        <h1>8</h1>
        <h2>Nov</h2>
        <h3>Engagement</h3>
      </div>

      <div className='image'>
        <img alt='item' src='https://i.pinimg.com/564x/a6/b6/36/a6b6365e04ba935f9ac428b0135c22d6.jpg' />
      </div>
    </div>);
}


export default function ProfileClient() {
  let user: head = {
    name: 'Ridwan Firmansyah',
    address: {
      province: 'Banten',
      state: 'Indonesia'
    },
    profession: 'Photographer',
    status: 'client',
    bio: 'Professional Photographer'
  }
  return (
    <>
      <div className='containerClient'>
        {/* head */}
        <Head user={user} />
        {/* Project event */}
        <div className='project'>
          <h1 className='title'>Project<br />Event</h1>
          <ItemsProject />
          <ItemsProject />
          <ItemsProject />
          <ItemsProject />
        </div>



        <div className='bottomBar'>
          <BottomBar />
        </div>
      </div>
    </>
  )
}
