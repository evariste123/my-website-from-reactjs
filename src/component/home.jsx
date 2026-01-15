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
        </div>
    )
}
export default Home