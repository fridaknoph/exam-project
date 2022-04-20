import Head from "next/head"
import { API_URL } from "../../utils/urls"
import Nav from "../../components/layout/Nav"
import Footer from "../../components/layout/Footer"
import axios from "axios"
import style from "../../styles/DetailsPage.module.css"

export default function Product({ product }) {
    console.log(product)
    return (
        <div>    
            <Head>
            <title>{product.attributes.name}</title>
            </Head>
            <Nav></Nav>
            <div className="main__container">
            <a href="/hotels">Back to Hotels</a>

            <h1 className="h1">{product.attributes.name}</h1>
            <div>{product.attributes.stars} Stars</div>
            <div className={style.details__bonus__container}>
            {product.attributes.bonus}                
            </div>
            <div className={style.details__price}>${product.attributes.price}</div>
            <button className="default__button">Book Your Stay</button>
            <div className={style.details__rating__container}><span className={style.details__rating}>{product.attributes.rating}</span> Very Good</div>
            <div className={style.description}>{product.attributes.description}</div>
            <a href="">See all recommendations</a>
            
            </div>
            <Footer></Footer>

        </div>
        
    )
}



export async function getStaticPaths() {
    
    
    const product_res = await fetch(`${API_URL}/api/hotels?populate=image/`)
    const products = await product_res.json()

    
    const paths = products.data.map((product) => ({
        params: {slug: product.attributes.slug},
    }));

    return {
        paths,
        fallback: false

    }

}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const product_res = await fetch (`${API_URL}/api/hotels?slug=${slug}`)
    const data =  await product_res.json()
    const found = data.data[0]

    return {
        props: {
            product: found
        }
    }
}