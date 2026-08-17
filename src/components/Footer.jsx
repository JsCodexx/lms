import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#1b2538] text-white mt-4">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-10 justify-between">
                    {/* Logo Section */}
                    <div className="flex-1  min-w-[250px] ">
                        <img
                            src="/src/assets/lms-removebg-preview.png"
                            alt="LMS Logo"
                            className="w-24 mb-5"
                        />

                        <p className="text-gray-400 mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, eos?
                        </p>

                        <div className="flex items-center gap-3">
                            <img
                                src="/src/assets/facebook-removebg-preview.png"
                                alt="Facebook"
                                className="w-10 rounded-full cursor-pointer"
                            />

                            <img
                                src="/src/assets/instagram-removebg-preview.png"
                                alt="Instagram"
                                className="w-8 rounded-full cursor-pointer"
                            />

                            <img
                                src="/src/assets/twitter-removebg-preview.png"
                                alt="Twitter"
                                className="w-10 rounded-full cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="md:flex  ">
                        <div className="min-w-[170px] ml-36 ">
                            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-white cursor-pointer">About Us</li>
                                <li className="hover:text-white cursor-pointer">Our Values</li>
                                <li className="hover:text-white cursor-pointer">Contact Us</li>
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="min-w-[170px]  ml-36">
                            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-white cursor-pointer">About Us</li>
                                <li className="hover:text-white cursor-pointer">Our Values</li>
                                <li className="hover:text-white cursor-pointer">Contact Us</li>
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                            </ul>
                        </div>

                        {/* Get Connected */}
                        <div className="min-w-[170px]  ml-36">
                            <h3 className="text-lg font-semibold mb-4">Get Connected</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-white cursor-pointer">About Us</li>
                                <li className="hover:text-white cursor-pointer">Our Values</li>
                                <li className="hover:text-white cursor-pointer">Contact Us</li>
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <hr className="border-gray-700" />

            <div className="py-5 text-center text-gray-400 text-sm px-4">
                Copyright © 2026{" "}
                <span className="text-white cursor-pointer font-medium">LMS</span>. All
                Rights Reserved.
            </div>
        </footer>
    );
}
