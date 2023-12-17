import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaHospital, FaBuilding, FaMoneyBill, FaGavel, FaPlane, FaChild, FaDesktop, FaSeedling, FaPassport } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';

export default function JobCategoriesComp() {
    const JobCategoriesComp = [
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=1&ln=en',
            title: 'Education and Learning',
            jobs: '74 Jobs',
            icon: FaGraduationCap
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=5&ln=en',
            title: 'Health and Wellness',
            jobs: '78 jobs',
            icon: FaHospital
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=3&ln=en',
            title: 'Electricity, Water and Local services',
            jobs: '200 jobs',
            icon: FaBuilding
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=7&ln=en',
            title: 'Money And Taxes',
            jobs: '@ 150+',
            icon: FaMoneyBill
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=10&ln=en',
            title: 'Justice, Law and Grievances',
            jobs: '&40+',
            icon: FaGavel
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=6&ln=en',
            title: 'Travel and Tourism',
            jobs: '1000+ jobs',
            icon: FaPlane
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=4&ln=en',
            title: 'Births, Deaths, Marriages and Child care',
            jobs: '70 jobs',
            icon: FaChild
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=14&ln=en',
            title: 'Science, IT and Communications',
            jobs: '500 jobs ',
            icon: FaDesktop
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=12&ln=en',
            title: 'Agriculture, Rural and Environment',
            jobs: '1000 jobs',
            icon: FaSeedling
        },
        {
            linkUrl: 'https://services.india.gov.in/service/listing?cat_id=11&ln=en',
            title: 'Citizenship, Visas & Passports',
            jobs: '80 jobs',
            icon: FaPassport
        },
        // ... other items
    ];

    return (
        <>
            <div className="container">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    {JobCategoriesComp.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="group px-3 py-10 rounded-md shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
                                <Link to={item.linkUrl} className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                                    <Icon />
                                </Link>

                                <div className="content mt-6">
                                    <Link to="#" className="title text-lg font-semibold hover:text-emerald-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.jobs}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
