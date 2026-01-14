import Raact from 'react'
import Header from '../assets/pages/header'
function Login(){
    return(
        <section className='login' id='login'>
            <Header/>
            <h1>👨‍💻 login</h1>
            <form action="">
            <div className='lg'>
                    <div className='input'>
                        <input type="text" name="email" id="email" required placeholder='Email' />
                    <br /><br />
                    <input type="password" name="password" id="password" required placeholder='password' />
                    <br /><br /><br /><br />
                    </div>
                    <div className='bt'>
                <button type='submit'>submit</button>
            </div>
            <br /><br />
            <div className='bt1'>
                <button type='reset'>reset</button>
            </div>
            or
            </div>
            </form>
            <div className='google'>
                <h4>login with google</h4>
                <a href="https://www.google.com" target='_blank'>
                    <button type='button'>
                        Google
                    </button>
                </a>
            </div>
            <div className='md'>
                or
                <h3>social-medial</h3>
                <a href="https://www.facebook.com">
                <button type='button'>facebook</button></a><br /><br />
              <a href="https://github.com"><button type='button'>github</button></a><br /><br />
              <a href="https://www.linkedin.com"><button type='button'>linkedin</button></a>
            </div>
        </section>
    )
}
export default Login