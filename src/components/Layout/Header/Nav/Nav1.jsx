import { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <div className="header-for-nav">
            <nav ref={navRef} className="mmmmmm">
                <Link onClick={() => showNavbar()} to="telimproqramlari"><a className="item-link">Təlim proqramları</a></Link>
                <Link onClick={() => showNavbar()} to="haqqimizda"><a className="item-link">Haqqımızda</a></Link>
                <Link onClick={() => showNavbar()} to="suallar"><a className="item-link">Suallar</a></Link>
                <Link onClick={() => showNavbar()} to="bloq"><a className="item-link">Bloq</a></Link>
                <Link onClick={() => showNavbar()} to="elaqe"><a className="item-link">Əlaqə</a></Link>

             
                <div className="search-buttons" id="for-responsive-button">
                    <div className="button-container">

                        <Link to="muraciyyet-et" onClick={() => showNavbar()}>
                            <button  >
                                Müraciət et
                            </button>
                        </Link>


                    </div>
                </div>

                <button
                    className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <div className="close-container-x">
                        <span className="close-x">x</span>
                    </div>

                </button>
            </nav>

            <button
                className="nav-btn"
                onClick={showNavbar}>
                <i className="fa fa-solid fa-bars"></i>
            </button>
            <div className="search-buttons" id="for-dekstop">
                    <div className="button-container">

                        <Link to="muraciyyet-et" onClick={() => showNavbar()}>
                            <button> Müraciət et</button>
                        </Link>


                    </div>
                </div>
        </div>
    );
}

export default Navbar;
