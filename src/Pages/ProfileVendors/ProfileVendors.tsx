import React from 'react'
import './ProfileVendors.scss'
import { useParams } from 'react-router-dom'

export const gambar: string = 'https://i.pinimg.com/564x/50/29/58/50295884cbe2fb45613b721f48b0c798.jpg'





export default function ProfileVendors() {
    const params = useParams<{ id: string }>()
    let info = 'perangkat anda adalah :' + navigator.userAgent
    return (
        <div className='containerVendor'>
            <Top />
            <Head />
            <Service />
            <p>{info}</p>
        </div>
    )
}
function Service() {
    return (
        <div className='serviceContainer'>
            <h3>Service Available</h3>
            <section>
                <p>wedding</p>
                <p>Engagement</p>
                <p>Pre Wedding</p>
                <p>Baby Born</p>
                <p>Birthday</p>
                <p>Party</p>
                <p>Akad</p>
            </section>
        </div>
    )
}

function Head() {
    return (
        <div className='headVendor' style={{ backgroundImage: `url(${gambar})` }}>

            <div className='head1'>

                <div className='a'>
                    <section>
                        <img alt='avatar' src='https://i.pinimg.com/736x/d9/d4/f0/d9d4f0ae197ee3a5abbc9f88b621a73f.jpg' />
                    </section>
                    <div>
                        <button>Follow</button>
                        <button>Message</button>

                    </div>
                </div>

                <div className='b'>
                    <section id='a'>
                        <h1>Grabit Phtography</h1>
                        <p>Capture with love</p>
                    </section>

                    <section id='b'>
                        <h4>Jakarta, Indonesia</h4>
                        <p>good Attitude</p>
                    </section>
                </div>


                <div className='head2'>
                    <h4>5000<br />followers</h4>
                    <h4>5000<br />following</h4>
                    <h4>5000<br />Project</h4>
                </div>
            </div>

        </div>);
}



function Top() {
    return (<div className='top'>
        <button>Back</button>
    </div>);
}