import React from "react";
import Header from "../assets/pages/header";
function Home() {
    return (
        <div className='navbar' id='home'>
            <Header />
            <h3>🇧evariste🍁 leaf</h3>
            <section className="curve">
                <h4>Welcome to 🇧evariste🍁 leaf Solutions, where we specialize in innovative
                    digital marketing strategies designed to help small businesses <br />
                     thrive in a competitive online landscape.
                    Our mission is to partner with you to cut through the noise, <br />
                     attract your ideal clients, and significantly grow your <br />
                      revenue without the headache of complex marketing jargon or wasted ad spend.  <br />
                    Explore our services to discover how our tailored approach delivers  <br />
                    measurable results and why we are the trusted choice for hundreds of entrepreneurs like you.</h4>
            </section>
            <section className="div">
                <div className="eva">
                    <a href=""><button type="button">EXPLORER NOW</button></a>
                </div>
                <div className="eva1">
                  <a href=""><button type="button"> <b>🏡 Home Service</b></button></a>
                </div>
                <div className="eva2">
                <a href=""><button type="button">    <b>🌐Roaming</b></button></a>
                </div>
                <div className="eva3">
                   <a href=""><button type="button"> <b>❓💬help</b></button></a>
                </div>
            </section>
            <section className="futa">
            <div className='g'>
        <h1>quick-links</h1>
        <div className='link'>
        <a href="/">home</a>
        <a href="/contact">contact</a>
        <a href="/about">about</a>
        <a href="/service">service</a>
        <a href="/product">product</a>
        <a href="/blogs">blogs</a>
        <a href="/login">login</a>
        <a href="/join">join</a>
        </div>
        </div>
        <div className='su'>
        <div className='s'>
        <h1>sub-links</h1>
        <a href="/document">Document</a>
        <a href="/status">Status</a>
        <a href="/support">Support</a>
        <a href="/developer">developer guides</a>
        <a href="/agent">Agents experience</a>
    </div>
    </div>
    <div className='socia'>
        <div className='medi'>
        <h1>social-media</h1>
        <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>
        <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>
        <a href="https://www.instagram.com/evari_ste2025/">instagram</a>
        <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>
        <a href="https://x.com/EBapfekure3">twitter</a>
    </div>
    </div>
    <div className='form1'>
        <form action="">
            <div className='f'>
                <h1>Stay up to date with Ebcodes news,add your 📩</h1>
                <input type="text"  id="email" required placeholder='Email' />
                <button type='submit'>--▶</button>
            </div>
        </form>
    </div>
     <section className='af'>
        <div className='oth'>
            <div className='cool'>
            <a href="">trust center</a>
            <a href="">privacy</a>
            <a href="">abuse</a>
            <a href="">cookie setting</a>
        </div>
        </div>
        <div className='fte'>
            <div className='set'>
                <p>©evariste🍁 leaf 2026</p>
                <select id='syste'>
                    <option value="">system</option>
                    <option value="">dark</option>
                    <option value="">light</option>
                </select>
            </div>
        </div>
    </section>
            </section>
        </div>
    )
}
export default Home