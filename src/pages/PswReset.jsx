import React from 'react'
import EmailResetForm from '../components/emailResetForm/EmailResetForm'
import PswChgForm from '../components/pswChangeForm/PswChgForm'
import { Link } from 'react-router-dom'
import { useLocalSessionStore } from '../components/Store'
const PswReset = () => {

    const { userData } = useLocalSessionStore();
    
    return (
        <main className='container'>
            <div className='flex justify-center items-center h-screen'>
                <div className='shadow-2xl  px-10 py-14 rounded-lg'>
                    <div className="title mb-9 text-3xl font-bold text-center">
                        Reset Password
                    </div>
                    <EmailResetForm />

                
                </div>
            </div>
        </main>
    )
}

export default PswReset