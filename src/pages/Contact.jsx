import React, { useState } from 'react'
import Container from './../components/Container'
import arrowDown from './../assets/icons/ArrowDown.png'
import { Formik, Form, Field } from 'formik'

export default function Contact() {
    const [formIsOpen, setFormIsOpen] = useState(false)
    const initialValues = {
        name: '',
        phone: '',
        email: '',
        country: '',
        comment: ''
    }

    const onSubmit = (values, submitProps) => {
        console.log(values)
        submitProps.setSubmitting(false)
        submitProps.reset()
    }

    return (
        <>
            <div className='bg-black w-full h-24'></div>
            <Container>
                <h1 className='font-anton mx-2 lg:mt-28 mt-10 lg:text-4xl text-3xl text-electricPurple text-center'>Let’s explore how Silk Route can help you achieve your dreams of a new life!!!</h1>
                <h1 className='mt-8 font-anton mx-2 lg:text-4xl text-3xl text-vividPink text-center'>Click here to contact a member of our team</h1>
                <div className='flex flex-col lg:h-screen justify-between'>
                    <div>
                        <div className='w-full flex justify-center mt-7'>
                            <img
                                src={arrowDown}
                                alt="arrowDown"
                                className={'cursor-pointer duration-300 ' + (formIsOpen ? 'rotate-180' : '')}
                                onClick={() => setFormIsOpen(!formIsOpen)} />
                        </div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                            <Form>
                                <div className='p-2'>
                                    <div className={'bg-vividPink lg:p-10 p-4 max-w-form mx-auto mt-10 ' + (formIsOpen ? 'block' : 'hidden')}>
                                        <Field name="name" type="text" className='customInput' placeholder='Full Name' />
                                        <Field name='phone' type="text" className='customInput' placeholder='Phone' />
                                        <Field name='email' type="text" className='customInput' placeholder='Email ' />
                                        <Field name='country' type="text" className='customInput' placeholder='Country' />
                                        <Field as='textarea' name='comment' className='customInput h-40' placeholder='How can we help?' />
                                        <div className='flex justify-end'>
                                            <button type='submit' className='mt-10 bg-springGreen py-3 px-20 font-anton text-2xl'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 mt-10 max-w-full overflow-hidden'>
                        <div className='bg-springGreen sm:p-24 py-10 sm:py-24 flex items-center justify-start flex-col'>
                            <div className='w-40'>
                                <h3 className='text-vividPink text-3xl font-anton'>Head Office</h3>
                                <p className='mt-2 font-anton text-xl'>Garve 23 <br />
                                    Someren 5712KD <br />
                                    Netherlands</p>
                            </div>
                        </div>
                        <div className='bg-delayedYellow sm:p-24 py-10 sm:py-24 flex items-center flex-col'>
                            <div className='w-40'>
                                <h3 className='text-electricPurple text-3xl font-anton'>Branch Office</h3>
                                <p className='mt-2 font-anton text-xl'>Avotu iela 6B - 31 <br />
                                    Riga, LV - 1011 <br />
                                    Latvia</p>
                            </div>
                        </div>
                        <div className='bg-vividPink sm:p-24 w-screen lg:w-auto py-10 sm:py-24 flex items-center flex-col'>
                            <div className='w-40'>
                                <h3 className='text-delayedYellow text-3xl font-anton'>Contacts</h3>
                                <div className='mt-2 font-anton text-xl'>
                                    <div className='flex'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 13C18 11.05 17.3207 9.39567 15.962 8.037C14.604 6.679 12.95 6 11 6V4C12.25 4 13.421 4.23733 14.513 4.712C15.6043 5.18733 16.5543 5.82933 17.363 6.638C18.171 7.446 18.8127 8.396 19.288 9.488C19.7627 10.5793 20 11.75 20 13H18ZM14 13C14 12.1667 13.7083 11.4583 13.125 10.875C12.5417 10.2917 11.8333 10 11 10V8C12.3833 8 13.5627 8.48733 14.538 9.462C15.5127 10.4373 16 11.6167 16 13H14ZM18.95 22.05C16.8 22.05 14.7043 21.575 12.663 20.625C10.621 19.675 8.81267 18.4083 7.238 16.825C5.66267 15.2417 4.396 13.429 3.438 11.387C2.47933 9.34567 2 7.25 2 5.1V4.575C2 4.39167 2.01667 4.21667 2.05 4.05H7.9L8.825 9.075L5.975 11.95C6.675 13.15 7.55433 14.275 8.613 15.325C9.671 16.375 10.8333 17.2833 12.1 18.05L15 15.15L20 16.15V22C19.8333 22.0167 19.6583 22.0293 19.475 22.038C19.2917 22.046 19.1167 22.05 18.95 22.05Z" fill="#FCFE00" />
                                        </svg>
                                        <span className='ml-2.5'>+31630243333</span>
                                    </div>
                                    <div className='flex'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.05 4.91C18.1332 3.98392 17.0412 3.24967 15.8376 2.75005C14.6341 2.25043 13.3431 1.99546 12.04 2C6.57999 2 2.12999 6.45 2.12999 11.91C2.12999 13.66 2.58999 15.36 3.44999 16.86L2.04999 22L7.29999 20.62C8.74999 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.10999 19.75 7.83999 19L7.53999 18.82L4.41999 19.64L5.24999 16.6L5.04999 16.29C4.22773 14.977 3.79113 13.4592 3.78999 11.91C3.78999 7.37 7.48999 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6175 6.85396 19.2257 7.76266 19.6394 8.76342C20.0531 9.76419 20.264 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.76999 11.63 9.61999 11.38C9.47999 11.13 9.59999 11 9.72999 10.87C9.83999 10.76 9.97999 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.86 10.39 9.72 10.33 9.6C10.27 9.48 9.76999 8.26 9.56999 7.76C9.36999 7.28 9.15999 7.34 9.00999 7.33H8.52999C8.35999 7.33 8.09999 7.39 7.86999 7.64C7.64999 7.89 7.00999 8.49 7.00999 9.71C7.00999 10.93 7.89999 12.11 8.01999 12.27C8.13999 12.44 9.76999 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z" fill="#FCFE00" />
                                        </svg>
                                        <span className='ml-2.5'>+31630243333</span>
                                    </div>
                                    <div className='flex'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#FCFE00" />
                                        </svg>
                                        <span className='ml-2.5'>hello@silkroute.lv</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}