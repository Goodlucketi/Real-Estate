import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false)
    const location = useLocation()
    const navMenuRef = useRef(null)
    
    const navToggle = ()=>{
        setNavMenu(!navMenu)   
    }

    const clickOutside = (e)=>{
        if(navMenuRef.current && !navMenuRef.current.contains(e.target)){
            setNavMenu(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', clickOutside)
        return ()=>{
            document.removeEventListener('click', clickOutside)
        }
    }, [])

    useEffect(()=>{
        setNavMenu(false)
    }, [location])
    return ( 
        <header className="bg-blue-700 sticky top-0 left-0 z-10 shadow-lg">
            <p className="text-right text-white text-xs py-2 w-10/12 mx-auto">Need Support? <RouterLink to="/support">Click Here</RouterLink></p>
            <nav ref={navMenuRef} className="relative p-3 md:p-3 flex items-center justify-between w-11/12 mx-auto text-white font-sans">
                <div className="logo flex items-center  md:w-2/12">
                    <h2 className="font-bold text-2xl"><RouterLink to="/" >HOMZ</RouterLink></h2>
                </div>
                <div className={`${navMenu ? ('block'): ('hidden')} actions bg-blue-700 p-10 absolute top-14 -right-7 h-screen md:h-0 md:top-0 md:right-0 md:bg-transparent md:p-5 md:text-center md:relative md:flex items-center gap-5`}>
                    <li className="p-2 my-2 list-none"><RouterLink to="/">Home</RouterLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                    <RouterLink className="bg-slate-50 rounded-md shadow-md text-blue-700 px-4 py-2 my-2" to="/usertype"> <button>Get Started</button></RouterLink>
                </div>
                <div onClick={navToggle} className="menu md:hidden">
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;