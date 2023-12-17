import React from 'react'
import Select from 'react-select'
import Navbar from '../../components/Navbar'
import Jobs from '../../components/Jobs'
import Feature from '../../components/Feature'
import Footer from '../../components/Footer'

import {  PiMapPin } from "react-icons/pi"
import { BiBriefcaseAlt2 } from 'react-icons/bi'

import ExploreJob from '../../components/Explore-job';

const optionsOne = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AZ', label: ' Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'GM', label: 'Gambia' },
]

const optionsTwo = [
    { value: '1', label: 'Full Time' },
    { value: '2', label: 'Part Time' },
    { value: '3', label: 'Freelancer' },
    { value: '4', label: 'Remote Work' },
    { value: '5', label: 'Office Work' },

]
export default function JobGridsOne() {
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative -mt-[42px] md:pb-24 pb-16">

                <div className="container z-1">
                    <div className="d-flex" id="reserve-form">
                        <div className="md:w-5/6 mx-auto">
                            <div className="lg:col-span-10">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div className="filter-search-form relative filter-border">
                                                    <BiBriefcaseAlt2 className="icons"/>
                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                </div>

                                                <div className="filter-search-form relative filter-border">
                                                    <PiMapPin className="icons"/>
                                                    <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={optionsOne} />

                                                </div>

                                                <div className="filter-search-form relative filter-border">
                                                    <BiBriefcaseAlt2 className="icons"/>
                                                    <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={optionsTwo} />

                                                </div>

                                                <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Jobs />
                <Feature />
                <ExploreJob/>
            </section>

            <Footer />
        </>
    )
}
