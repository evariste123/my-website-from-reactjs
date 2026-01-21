import React from 'react'
import Header from '../assets/pages/header'
function Blogs(){
    return(
        <section className='blogs' id='blog'>
            <Header/>
            <h1>🇧evariste🍁 leaf 2026</h1>
            <p>welcome to my blog and enjoy with us!</p>
                            <marquee behavior="right" direction="right">welcome hope sunlight 🇧evariste🍁leaf 2026</marquee>
            <div className='mtn'>
                <img src="src/page/download (1).jpeg" alt="image" />
            </div>
            <div className='mtn1'>
                <p>welcome to my brogs</p>
                <div className='bata'>
                    <div className='taba1'>
                        <img src="src/page/eva.png" alt="profile" />
                        <h2>Mr,bapfekurera evariste</h2>
                        <p>
                            Iam full fronted and backend developer <br />
                            I would like to informal my website clients <br />
                            to know more about our website and our website <br />
                            solutioners inorder you know where you can find your <br />
                            solution for your problems faced with in our website <br />
                            here we need to all problems you have then we can give <br />
                            full solution and some change in our website if it <br />
                            necessary to make some things that are needed for you.
                        </p>
                    </div>
                </div>
                <div className='bata2'>
                    <div className='bata3'>
                        <img src="src/assets/pages/image/Untitled design.png" alt="profile" />
                        <h2>Mr,Nkunzimana pascal blaise</h2>
                        <p>
                            Iam CEO of this campany that is operating in canada on the streets <br />
                            of 1k,555 Ottawa  and also some branches in the whole country and all <br />
                            district in canada and every where within in the country, so we empower every <br />
                            one to join us on our website,we will joy full for your concerned to be one of us <br />
                            now we hope you can help us to motivate our works and our developer to enhancing <br />
                            our products and some all things needed to be updates by our website for every time <br />
                        </p>
                    </div>
                </div>
                <div className='bata4'>
                    <div className='bata5'>
                        <img src="src/assets/pages/image/kaburo.png" alt="profile" />
                        <h2>Mr,kaburo audace</h2>
                        <p>
                            Iam scientist in human being of how human can live and how can  find food through in the <br />
                            different way.so I am here as protector of human being and teach them how can using some internet <br />
                            and how can get some opportunity via online and how you can grow your business without paying some amount <br />
                            this is website is made for people to solve some problems and some conflict between people in the way <br />
                            getting their profits
                        </p>
                    </div>
                </div>
            </div>
            <section className='comp'>
                <h1>if you need to join us,you may complete this form🗣</h1>
                <div className='comp1'>
                    <div className='comp0'>
                        <form action="">
                            <input type="text" id="fname" required placeholder='your full name*' />
                            <br /><br />
                            <input type="text"  id="email" required placeholder='your Email*' />
                            <br /><br />
                            <input type="password" id="password" required placeholder='your password*'/>
                            <br /><br /><br /><br />
                            <div className='comp2'>
                                <button className='submit'>send</button>
                                <button type='reset'>reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className='wf'>
                <div className='lks'>
                    <h2>quick-links</h2>
                <div className='lk'>
                    <a href="/">home</a>
                    <a href="/document">document</a>
                    <a href="/about">about</a>
                    <a href="/contact">contact</a>
                    <a href="/product">product</a>
                    <a href="/service">service</a>
                    <a href="#blog">blog</a>
                    </div>
                </div>
                <div className='lkin'>
                    <h5>social-links</h5>
                    <div className='lka'>
                     <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>
        <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>
        <a href="https://www.instagram.com/evari_ste2025/">instagram</a>
        <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>
        <a href="https://x.com/EBapfekure3">twitter</a>
                </div>
                </div>
                <div className='hope'>
                    <h5>©evariste🍁leaf 2026</h5>
                </div>
            </section>
        </section>
    )
}
export default Blogs