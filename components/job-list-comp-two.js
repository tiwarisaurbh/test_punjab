import React from 'react'
import { Link } from "react-router-dom";
import { Bookmark } from 'react-feather';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"

import { LuMapPin } from 'react-icons/lu'
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'

import { jobData } from '../data/data';

export default function JobListCompTwo() {
    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">

                {jobData.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden lg:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div className="flex items-center">
                            <div
                                className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src={item.image} className="h-8 w-8" alt="" />
                            </div>
                            <Link to="/job-detail-three"
                                className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[150px]">{item.title}</Link>
                        </div>

                        <div className="lg:block flex justify-between lg:mt-0 mt-4">
                            <span className="block"><span
                                className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.jobtype}</span></span>
                            <span className="flex items-center text-slate-400 text-sm md:mt-1 mt-0"><AiOutlineClockCircle className='me-1'/>{item.date}</span>
                        </div>

                        <div className="lg:block flex justify-between lg:mt-0 mt-2">
                            <span className="text-slate-400 flex items-center"><LuMapPin className='me-2'/>{item.Location}</span>
                            <span className="block font-semibold lg:mt-1 mt-0">{item.price}</span>
                        </div>

                        <div className="lg:mt-0 mt-4">
                            <Link to="#"
                                className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white lg:relative absolute top-0 end-0 lg:m-0 m-3">
                                <Bookmark className="h-4 w-4"></Bookmark></Link>
                            <Link to="/job-apply"
                                className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">{item.apply}</Link>
                        </div>
                        {item.rating === true ? <span className="w-24 text-white p-1 text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-3 bg-yellow-400 flex justify-center"><AiOutlineStar/></span> :""}
                    </div>
                ))}

            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                            </li>
                            <li>
                                <Link to="#" aria-current="page"
                                    className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                            </li>
                            <li>
                                <Link to="#"
                                    className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                    <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
