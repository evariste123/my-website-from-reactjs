import React from "react";
import Header from "../component1/header";
function Status(){
    return(
        <section className="status" id="status">
            <Header/>
            <div className="st">
            <h3>welcome to our economics status and how you can donate money from our website 
                <br />in way to enhancing your business and your wealth and your pockets here you can be <br />
                donate some amounts you wish get and be ready to pay in the different interval and <br />
                with some profits according to time you donate and you can pay money or donate <br />
                with those button.⚠️exception whether you have an account to our website you can donate some <br />
                amounts but unless you can create account inorder to secure your donate.click <a href="/join">here</a> to <br />
                create new account🔜
            </h3>
            </div>
            <div className="donate">
                <h2>pay with the following options👇</h2>
                <div className="don">
                    <button type="button">📦 VISA</button>
                    <button type="button">💳Pay<span>pal</span></button>
                    <button type="button">📦Card</button>
                    <br /><br />
                    <button type="button">📱Pay</button>
                    <button className="button">💰bitcoin</button>
                    <button type='button'>💎ovo</button>
                </div>
            </div>
            <section className="dona">
                <h3>donate per day for box 1</h3>
                <h3>donate per monthly for box 2</h3>
                <h3>donate per year for box 3</h3>
                <form action="">
                <div className="dt">
                    <input type="$"  id="$" placeholder="$200" required/>
                    <input type="$"  id="$" placeholder="$350"/>
                    <input type="$"  id="$" placeholder="$500"/>
                    <button type="submit" input button='time'>donate</button>
                </div>
               </form>
               <section className="date">
                <div className="time">
                    <b>visa</b>
                </div>
                <div className="time1">
                    <b>paypal</b>
                </div>
                <div className="time2">
                    <b>card</b>
                </div>
                <div className="time3">
                    <b>apple pay</b>
                </div>
                <div className="time4">
                    <b>bitconi</b>
                </div>
                <div className="time5">
                    <b>OVO</b>
                </div>
               </section>
            </section>
            <section className="dance">
                <div className="dance1">
                     <h2>quick-links</h2>
                    <div className="dance2">
                        <a href="/home">home</a>
                        <a href="/document">document</a>
                        <a href="/status">status</a>
                        <a href="/support">suppport</a>
                        <a href="/developer">developer</a>
                        <a href="/agent">agent</a>
                    </div>
                </div>
                <div className="dance3">
                    <b>social-media</b>
                    <div className="dance4">
                       <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>
                       <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>
                      <a href="https://www.instagram.com/evari_ste2025/">instagram</a>
                      <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>
                      <a href="https://x.com/EBapfekure3">twitter</a>
                    </div>
                </div>
                <div className="dance5">
                    <b>contact-details</b>
                    <div className="dance6">
                        <input type="text" placeholder="Contact:0785786547" readOnly />
                        <br /><br />
                        <input type="text" placeholder="Email:bapfekureraevariste@gmail.com" readOnly/>
                        <br /><br />
                        <input type="text" placeholder="Location:Kigali-Mahama-Camp" readOnly />
                    </div>
                </div>
                <div className="dance7">
                    <p>©Evariste🍁 2026</p>
                </div>
            </section>
        </section>
    )
}
export default Status