import React from 'react'

export default function Footer() {
    return (
        <div className='superman' >
            <div className='fotterContainer'>

                {/* div1 */}
                <div className='super'>
                    <div className='mainFotter'>

                        <h2 className='lms'>LMS</h2>
                        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos?</p>
                        <div>
                            <img src="/src/assets/facebook-removebg-preview.png" alt="" style={{ width: "60px", borderRadius: "100px" }} />
                            <img src="/src/assets/instagram-removebg-preview.png" alt="" style={{ width: "45px", borderRadius: "30px" }} />
                            <img src="/src/assets/twitter-removebg-preview.png" alt="" style={{ width: "65px", borderRadius: "50%" }} />
                        </div>
                    </div>
                    {/* div2 */}
                    <div className='usefull'>
                        <h3 className='pad' >Usefull links</h3>
                        <p className='lorem'>About Us</p>
                        <p className='lorem'>Our Values</p>
                        <p className='lorem'>Contact Us</p>
                        <p className='lorem'>Help Center</p>
                    </div>
                    {/* div3 */}
                    <div className='usefull'>
                        <h3 className='pad'>Our Company</h3>
                        <p className='lorem'>About Us</p>
                        <p className='lorem'>Our Values</p>
                        <p className='lorem'>Contact Us</p>
                        <p className='lorem'>Help Center</p>
                    </div>
                    {/* div4 */}
                    <div className='usefull'>
                        <h3 className='pad'>Get Connectss</h3>
                        <p className='lorem'>About Us</p>
                        <p className='lorem'>Our Values</p>
                        <p className='lorem'>Contact Us</p>
                        <p className='lorem'>Help Center</p>
                    </div>
                </div>



            </div>
            <hr />
            <h3 className='copy'>Copyright © 2026 <span className='mid'>LMS</span> All Rights Reserved</h3>

        </div>

    )
}
