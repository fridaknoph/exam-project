import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import Nav from "../components/layout/Nav.js"
import Footer from "../components/layout/Footer.js"
import style from "../styles/VisitBergen.module.css"
import Herosection from "./herosection.js"



export default function Visit() {

    return (

        <><div>
        <Head>
            <title>Visit Bergen</title>
        </Head>
            <Nav></Nav>

            <div className="main__container">
                <img className="header__img" src="https://frontstudent.com/exam2022/header_visitbergen.png" />
                <div className={style.bergen__container}>
                        <h2 className={style.h2}>Visit Bergen</h2>
                        <div className={style.bergen__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</div>
                                <span className={style.button__wrapper}>
                                </span>

                </div>
                <h2 className="center__h2">Nature And Hiking</h2>
                <Herosection />
                <button className={style.def__button}>Book Your Stay </button>


                <h2 className="center__h2">See The City</h2>
                <Herosection />
                <button className={style.def__button}>Book Your Stay </button>

       

            
            </div>
        </div><Footer /></>




    )
};
