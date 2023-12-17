import React from 'react'
import { HelpCircle } from 'react-feather'

export default function QuesAnswer() {
    const QuesAnswerData = [
        {
            question: 'How does our Punjab Job Portal work?',
            answer: 'Our job portal connects job seekers with a wide range of opportunities, both in the private and government sectors. The platform streamlines the job search process, providing easy access to relevant positions.',
        },
        {
            question: 'What is the main process to open an account on our portal?',
            answer: 'Creating an account on our job portal is a simple and secure process. Navigate to the registration page, fill in the required details, and you\'ll be ready to explore and apply for jobs that match your skills and preferences.',
        },
        {
            question: 'How can I access unlimited data entry positions?',
            answer: 'Our platform offers a diverse range of data entry positions. Once registered, you can explore unlimited job listings in this category. Whether you are an experienced data entry professional or just starting, there are opportunities for everyone.',
        },
        {
            question: 'Is the Punjab Job Portal safe to use with my account?',
            answer: 'Yes, the security of your account is our top priority. We implement robust measures to ensure the safety of your personal information. Our platform is designed to provide a secure and user-friendly experience for all our users.',
        }
    ]
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Explore common questions about our Punjab Job Portal. Find information about the job search process, account creation, available positions, and account security.</p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {QuesAnswerData.map((item, index) => (
                    <div className="flex" key={index}>
                        <HelpCircle className="h-8 text-emerald-600 me-3" ></HelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold">{item.question}<span className="text-emerald-600"></span> </h5>
                            <p className="text-slate-400">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
