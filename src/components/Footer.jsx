import React from 'react'

export default function Footer() {
    return (
        <div className='h-[480px] bg-[#1b2538]' >
            <div className='flex w-full bg-[#1b2538] mt-[20px] justify-between'>

                {/* div1 */}
                <div className='flex'>
                    <div className='text-white font-mono flex flex-col gap-[20px] h-[400px] pl-[50px]'>

                        <img src='/src/assets/lms-removebg-preview.png' className='text-white text-[60px] m-0 pt-[50px]  font-serif mr-[70px]' width={100}/>
                        <p className='mr-[80px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos?</p>
                        <div className='flex'>
                            <img src="/src/assets/facebook-removebg-preview.png" alt="" style={{ width: "60px", borderRadius: "100px" }} />
                            <img src="/src/assets/instagram-removebg-preview.png" alt="" style={{ width: "45px", borderRadius: "30px" }} />
                            <img src="/src/assets/twitter-removebg-preview.png" alt="" style={{ width: "65px", borderRadius: "50%" }} />
                        </div>
                    </div>
                    {/* div2 */}
                    <div className=' flex flex-col gap-[20px] mt-[70px] w-[200px] '>
                        <h3 className='p-0' >Usefull links</h3>
                        <p className='mr-[80px] w-[300px] text-gray-500'>About Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Our Values</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Contact Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Help Center</p>
                    </div>
                    {/* div3 */}
                    <div className='flex flex-col gap-[20px] mt-[70px] w-[200px] '>
                        <h3 className='p-0'>Our Company</h3>
                        <p className='mr-[80px] w-[300px] text-gray-500'>About Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Our Values</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Contact Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Help Center</p>
                    </div>
                    {/* div4 */}
                    <div className='flex flex-col gap-[20px] mt-[70px] w-[200px] '>
                        <h3 className='p-0'>Get Connectss</h3>
                        <p className='mr-[80px] w-[300px] text-gray-500'>About Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Our Values</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Contact Us</p>
                        <p className='mr-[80px] w-[300px] text-gray-500'>Help Center</p>
                    </div>
                </div>



            </div>
            <hr />
            <h3 className='text-[15px] text-center m-0 px-[15px] py-[15px] text-gray-500'>Copyright © 2026 <span className='text-white text-[15px] cursor-pointer'>LMS</span> All Rights Reserved</h3>

        </div>

    )
}
