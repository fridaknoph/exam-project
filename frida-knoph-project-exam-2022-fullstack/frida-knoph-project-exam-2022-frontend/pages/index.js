import Head from "next/head";
import Link from "next/link";
import { API_URL } from "../utils/urls.js";
import Nav from "../components/layout/Nav.js";
import Footer from "../components/layout/Footer.js";
import style from "../styles/HomePage.module.css";
import Herosection from "./herosection.js";



export default function Home({ hotels }) {

    return (
        <><div>
        <Head>
            <title>Home</title>
        </Head>
            <Nav></Nav>

            <div className="main__container">
                <img className="header__img" src="https://frontstudent.com/exam2022/header_home.png" />
                <div className={style.home__container}>
                        <img className={style.home__img} src="https://frontstudent.com/exam2022/home1.jpg" />


                    <div className={style.home__container__coloumn}>
                        <h2 className={style.h2}>Welcome to Holidaze</h2>
                        <div className={style.home__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</div>
                        <div className={style.home__bonus}>
                                <span>
                                ✓ Most Popular Hotels
                                </span>
                                <span>
                                ✓ Free Cancellation
                                </span>
                                <span>
                                ✓ Change your stay whenever
                                </span>
                                <span className={style.button__wrapper}>
                                <button className={style.def__button}>Book Your Stay </button>
                                </span>
                                </div>

                            </div>


                </div>
                <h2 className="center__h2">Our Hotels</h2>
                <Herosection />       

                <h2 className="center__h2">Tourism Attractions</h2>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </div>
       

            
            </div>
        </div><Footer /></>




    )
};

export async function getStaticProps() {

    const hotel_res = await fetch(`${API_URL}/api/hotels?populate=image`)
    const hotels = await hotel_res.json()


    return {
        props: {
            hotels: hotels
        }
        
    }
}