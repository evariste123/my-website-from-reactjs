import React from "react";
import Header from "../component1/header";
function Support(){
    return(
        <section className="support" id="support">
            <Header/>
            <div className="spt">
            <h3>this website it is designed to  help users resolve issues, find answers, and connect with the company, <br />
             functioning as a vital part of the user experience, often in the top-right corner or footer. It usually acts as a hub for <br />
             self-service tools, contact methods, and documentation <span>🎗</span>
            </h3>
            </div>
            <div className="dora">
                <a href=""><button type="button">Get support</button></a>
                <a href=""><button type="button">available</button></a>
            </div>
            <section className="suppo">
                <div className="suppo1">
                    <h4>See new update</h4>
                </div>
            </section>
            <section className="sutto">
                <div className="splink">
                    <h3>support-links</h3>
                    <div className="sptlink">
                        <a href="">FAQ</a>
                        <a href="">help center</a>
                        <a href="">support options</a>
                        <a href="">support tickets system</a>
                        <a href="">live chat</a>
                        <a href="">system status</a>
                        <a href="">billing</a>
                        <a href="">download</a>
                    </div>
                </div>
                <div className="email">
                    <h3>stay up date with us🤝 </h3>
                     <form action="">
                    <div className="email1">
                            <input type="text" name="email" id="email" placeholder="Email..." required /> <br />
                            <br />
                            <input type="number" name="number" id="number" placeholder="phone number" required />
                            <br /><br />
                       
                    </div>
                    <div className="butto1">
                        <button type="submit">send⤴</button>
                    </div>
                     </form>
                      </div>
                     <div className="butto2">
                        <h3>social-media links</h3>
                        <div className="butto3">
                            <a href="/home">home</a>
                            <a href="/document">document</a>
                            <a href="/status">status</a>
                            <a href="/support">support</a>
                            <a href="/developer">developer</a>
                            <a href="/agent">agent</a>
                        </div>
                     </div>
                <div className="evariste">
                    <p>©Evariste🍁 2026</p>
                </div>
            </section>
        </section>
    )
}
export default Support