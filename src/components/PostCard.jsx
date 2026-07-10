import React from 'react'

export default function PostCard({ user }) {
    console.log(user, "user")
    return (
        <div>
            <div className='postContainer'>

                <div className='smallContainer'>
                    <div className='blue'>
                        <div className='icon'>
                            <img src={user.image} alt={user.firstName} width="50" />
                            <div>
                                <p className='name'>{user.firstName}"{user.lastName}</p>
                                <p className='date'>Monday at 11:00 AM</p>
                            </div>


                        </div>
                        <h4 className='email'>{user.email}</h4>
                        <div className='bigImage'>
                            <img className='title' src={user.image} alt={user.firstName} width="50%" height="150px" />
                        </div>
                        <div className='reacts'>
                            <p className='put'>💗😮👍  Lorem  and 291 others </p>
                            <p className='put'>55 comments</p></div>
                        <hr />
                        <div className='logos'>
                            <img className='like' src="/src/assets/thumps_up-removebg-preview.png" alt="" />
                            <img className='like' src="/src/assets/comment3-removebg-preview.png" alt="" />
                            <img className='like' src="/src/assets/share2-removebg-preview.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
