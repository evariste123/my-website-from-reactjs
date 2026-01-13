import React from "react";
import Header from "../assets/pages/header";
function Product(){
    return(
        <section className='container' id='product'>
            <Header/>
    <h4>market place for product we provide 🏪</h4>
    <div className='prod'>
        <div className='p0'>
            <img src="src/assets/image/p0.jpeg" alt="product0" />
            <p>this is house store food and <br />
            other different products with the <br />
            the market place and provide all <br />
            foods needed in the hospital.</p>
        </div>
        <div className='p1'>
            <img src="src/assets/image/p1.jpeg" alt="product1" />
            <p>
                this image show us all materials <br />
                that can be used in the different <br />
                field and some tools or furniture <br />
                tools used at home in our daily life
            </p>
        </div>
        <div className='p2'>
            <img src="src/assets/image/p2.jpeg" alt="product2" />
            <p>
                this is image show us some <br />
                foods store in the nutriton <br />
                foods for baby and some oldest <br />
                people can access it from food
            </p>
        </div>
        <div className='p3'>
            <img src="src/assets/image/p3.jpeg" alt="product3" />
            <p>
                this is store of some staff used <br />
                making food to be sweets for <br />
                consumer or who is going to eat <br />
                inorder to get some apetit.
            </p>
        </div>
        <div className='p4'>
            <img src="src/assets/image/p4.jpeg" alt="product4" />
            <p>
                this is where we prepare our <br />
                conference how we can to make or <br />
                add some products needed for our <br />
                clients and and our share-holdes
            </p>
        </div>
        <div className='p5'>
            <img src="src/assets/image/p5.jpeg" alt="product5" />
           <p>
             this is store of salade and how <br />
            we can marketing our products to <br />
            consumed and whrere we can provides <br />
            for ou clients and how you can pay.
           </p>
        </div>
    </div>
</section>
    )
}
export default Product