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
                <Link className="item-link" onClick={() => showNavbar()} to="telimproqramlari">Təlim proqramları</Link>
                <Link className="item-link" onClick={() => showNavbar()} to="haqqimizda">Haqqımızda</Link>
                <Link className="item-link" onClick={() => showNavbar()} to="suallar">Suallar</Link>
                <Link className="item-link" onClick={() => showNavbar()} to="bloq">Bloq</Link>
                <Link className="item-link" onClick={() => showNavbar()} to="elaqe">Əlaqə</Link>




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

        </div>
    );
}

export default Navbar;
