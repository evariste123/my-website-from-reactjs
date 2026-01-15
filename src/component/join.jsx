import React from 'react'
import Header from '../assets/pages/header'
function Join(){
    return(
        <section className='join' id='join'>
        <Header/>
        <form action="">
        <div className='sign'>
            <h1>Get free Email updates!</h1>
            <h4>join us for free to get instant updates</h4>
            <input type="text" name="full name" id="firstname" required placeholder='first name'/><br /><br />
            <input type="text" name="email" id="email" required placeholder='Email' />
            <h4>🔒your information is safe with us!</h4>
            <div className='butto'>
                <button type='submit'>
                    Get Access to day
                </button>
            </div>
        </div>
        </form>
        </section>
    )
}
export default Join