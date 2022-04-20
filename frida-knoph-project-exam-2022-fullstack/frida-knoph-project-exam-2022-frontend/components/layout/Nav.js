import Head from "next/head"
import HandleSearch from "../../pages/searchbar"
import Hotels from "../../pages/hotels"

export default function Nav() {

    return (
        <div>
            <div className="nav__row">
            <div className="nav__logo">
            <a href="/"><h1 className="logo">Holidaze</h1></a>
            <div className="slogan">Make your stay the best</div>
            </div>
            <div className="nav__links__row">
                <div className="nav__links">
                    <a href="/" className="nav__logo">
                    Holidaze
                    </a>
                    <a href="/hotels">
                    Our Hotels
                    </a>
                    <a href="/contact">
                    Contact
                    </a>
                    <a href="/visitbergen">
                    Visit Bergen
                    </a>   
                    </div>
                <div className="nav__search">
                        <a href="/login">Log In</a>
                       <input placeholder="Search Hotels..."></input>

                </div>
                </div>


            </div>





        </div>
    )
};

