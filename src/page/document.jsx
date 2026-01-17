import React from "react";
import Header from "../component1/header";
function Document(){
    return(
        <section className="document" id="document">
            <Header/>
            <h1>welcome to our documentation📖</h1>
            <div className="doc1">
                <div className="d1">
                    <img src="src/assets/pages/image/images.jpeg" alt="image" />
                    <p>
                        this image show us how you can <br />
                        upload your document  via online <br />
                        and how you can retrieval data from <br />
                        online and where you can through in <br />
                        the way of keeping your document.
                    </p>
                </div>
            </div>
            <div className="doc2">
                <div className="d2">
                    <img src="src/assets/pages/image/images (1).jpeg" alt="image" />
                    <p>
                        this image show us how you can get <br />
                        some information and data via online  <br />
                        and also you can transfer data in the form <br />
                        of air like message,fax and other things related <br />
                        to document and data you can to get or receive.
                    </p>
                </div>
            </div>
            <div className="doc3">
                <div className="d3">
                    <img src="src/assets/pages/image/images (2).jpeg" alt="image" />
                    <p>
                        this image show us how you can manage <br />
                        your document and how you can add some document <br />
                        in the form of documentation through libraries <br />
                        and where you can add some document on your library.
                    </p>
                </div>
            </div>
            <div className="side">
                <div className="side1">
                    <h4>upload your dicument here to safe with us 🔑</h4>
                    <a href="">
                        <input type="file"  id="file" required/>
                        <input type="file" id="file" required/>
                        <input type="file"  id="file" required />
                    </a>
                </div>
            </div>
            <h1>learning through libraries place 📖 </h1>
            <div className="side2">
                <div className="side3">
                   <img src="src/assets/pages/image/c.jpeg" alt="image" />
                   <p>
                    this image you can down load to <br />
                    increase your knowledge and your business <br />
                    and also to how you can to enhancing your <br />
                    your knowledge to create your future.
                   </p>
                   <div className="search">
                    <form action="" target="_parent">
                    <input type="text"  id="search" placeholder="search book..."/>
                    <button type="button">🔎</button>
                    </form>
                   </div>
                </div>
            </div>
            <div className="sid">
                <div className="sid1">
                    <img src="src/assets/pages/image/c3.jpeg" alt="image" />
                    <p>
                        this image show us how you can learn <br />
                        the following some things like music, <br />
                        video,coding,website and some things like cartoon <br />
                        and some contents like comedy and ibitente.
                    </p>
                </div>
            </div>
            <div className="sid2">
                <div className="sid0">
                    <img src="src/assets/pages/image/c1.jpeg" alt="image" />
                    <p>
                        this image show us how you can learning coding <br />
                        and through in the form of electic form and <br />
                        make more practice through research and and make <br />
                        more innovation and creative,even invention to <br />
                        increase your accessibility and potential.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Document