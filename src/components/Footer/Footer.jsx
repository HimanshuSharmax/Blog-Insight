import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import logoImg from '../../assets/logoImg.png'
import LogoFooter from '../LogoFooter'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-900 bg-gradient-to-r from-stone-900 to-blue-900">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                {/* <Logo width="100px"/> */}
                                <LogoFooter width="160px"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">
                                    &copy;Copyright 2024. Develop by <Link to={'https://github.com/HimanshuSharmax'} className='font-medium hover:text-gray-100'>Himanshu Sharma.🚀</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full mt-5">
                            <h3 className="tracking-px mb-5 text-sm font-bold uppercase text-neutral-300">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full mt-5">
                            <h3 className="tracking-px mb-5 uppercase text-sm font-bold uppercase text-neutral-300">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full mt-5">
                            <h3 className="tracking-px mb-5 uppercase text-sm font-bold uppercase text-neutral-300">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-400 hover:text-gray-300"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer