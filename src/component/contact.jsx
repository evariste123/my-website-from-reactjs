import React from "react";
import Header from "../assets/pages/header";
function Contact(){
    return(
          <div className='card'>
            <Header/>
            <h1>Welcome to my website 🍁 leaf 2026</h1>
            <p>
                this is my work from react and how I can build simple project by using the following technology such that  <br />
                css,html,js and even react to more a good professional website in the different way and how you can learn more courses<br /> about 
                it through this website. so if you need to to get  more information you can click the button below to get me more .
                👇 welcome to my webpage!
            </p>
            <a href="https://github.com/evariste123"><button type='button'>Here me!</button></a>
            <p>scrolldown to get my contact info 👇</p>
            <form action="">
            <div className='card1' id='contact'>
                <h1>complete this form then get my information ✅</h1>
                <label htmlFor="">full name:</label>
                <input type="text" name="name" id="name" placeholder='enter your full name' required/>
                <br /><br />
                <label htmlFor="">📩 Email:</label> 
                <input type="text" name="email" id="email" placeholder='enter here your Email' required />
                <br /><br />
                <label htmlFor="">🔑 password:</label>
                <input type="password" name="password" id="password" placeholder='enter your password' required />
                <br /><br />
                <label htmlFor="">🗨 Message:</label>
                <textarea name="message" id="message" placeholder='type here your message...' required></textarea>
                <br />
            </div>
            <div className='butt'>
                <button type='submit'>send</button>
                <button type='reset'>reset</button>
            </div>
            </form>
        </div>
    )
}
export default Contact