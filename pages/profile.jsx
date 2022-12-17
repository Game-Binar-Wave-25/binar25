import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { BiEditAlt } from 'react-bootstrap-icons'

const Profile = () => {
    const [data, setData] = useState({})
    const [isUser, setUser] = useState('')
    const [isUserId, setUserId] = useState('')

    // const authenticate = () => {
    //     let storage = localStorage.getItem("accesstoken")
    //     if (storage === "" || storage === null){
    //       navigate('/LoginPage')
    //     } else {
    //       let decode = jwt_decode(storage)
    //       setUser(decode.email)
    //       setUserId(decode.user_id)
    //     }
    //   }

    const firebaseData = async () => {
        try {
            const db = await get(child(ref(database),`Histories/`))
            setData(db.val())
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        firebaseData()
    })

    return (
    <div className="profile">
        <div className="title-section">
           User Profile
        </div>
        <div className="main-section">
            <Card className="left-container" style={{ width: '18rem' }}>
                <Card.Title className="profile-title">User Detail</Card.Title>
                <Card.Img className="profile-image" variant="top" src='https://www.qoala.app/id/blog/wp-content/uploads/2020/12/Bill-Gates-Profil-Biografi-Fakta-Terkini-2020.jpg' />
                <Card.Body>
                    <div className="username">billganteng</div>
                    <hr />
                    <div className="rank">
                        Your Rank 
                        <img className="rank-image" alt="your rank" src="https://w7.pngwing.com/pngs/477/877/png-transparent-trophy-silver-medal-gold-trophy-glass-medal-sticker-thumbnail.png" />
                        <div className="rank-title">Silver</div>
                    </div>
                </Card.Body>
            </Card>
            <div className="main-info">
                <div className="info-title-section">
                <Link className="to-edit" href="/UpdateProfile">edit profile</Link> <p className="info-title">ABOUT ME </p> 
                </div>
                <hr />
                <div className="main-detail">
                {/* <article className="info">
                    <span className="info-prop">Name</span><span className="info-val">Bill Gates</span>
                </article> */}
                    <div className="info-prop">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Age</p>
                        <p>Phone</p>
                    </div>
                    <div className="info-val">
                        <p>Bill Gates</p>
                        <p>billganteng@gmail.com</p>
                        <p>50</p>
                        <p>081081081081</p>
                    </div>
                </div>
                <br />
                <div className="info-title">RECORD</div>
                <hr />
                <div className="record">
                    <div className="count-title">
                        WIN count
                        <div className="count"><span>60</span></div>
                    </div>
                    <div className="count-title">
                        LOSE count
                    <div className="count"><span>50</span></div>
                    </div>
                    <div className="count-title">
                        YOUR SCORE
                        <div className="count"><span>180</span></div>
                        </div>
                </div>
                </div>
        </div>
    </div>
    )
}

export default Profile

// please finished it :)
// bug on Card