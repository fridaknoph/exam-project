import Head from "next/head"
import Logout from "../../pages/logout.js"


export default function Footer() {

    return (
        <div>
            <div className="nav__row__footer">
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
                    <a href="/login" onClick={() => Logout() }>
                    Log out
                    </a>  
                    <a href="/admin">
                    My Page                    
                    </a>  
                    </div>
                </div>


            </div>





        </div>
    )
};

