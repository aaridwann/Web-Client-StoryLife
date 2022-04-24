import React from 'react'
import './BottomBar.scss'
import notif from './notif.png'
import add from './add.png'
import Home from './Home.png'
import profile2 from './profile2.svg'
import search from './search.png'



export default function BottomBar() {
    return (
        <div className='bottombar'>
            <button>
                <img src={Home} alt="notif" />
            </button>
            <button>
                <img src={search} alt="notif" />
            </button>
            <button>
                <img src={add} alt="notif" />
            </button>
            <button>
                <img src={notif} alt="notif" />
            </button>
            <button>
                <img src={profile2} alt="notif" />
            </button>
        </div>
    )
}
