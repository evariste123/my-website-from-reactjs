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
        </section>
    )
}
export default Document