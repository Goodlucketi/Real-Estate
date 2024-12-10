import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Footer = () => {
    return ( 
        <footer className="p-4 bg-slate-900 text-white">
            <div className="footer p-4 grid md:grid-cols-4 w-11/12 mx-auto">
                <div className="logo mb-5">
                    <h3 className="font-bold mb-3 text-xl underline">HOMZ</h3>
                </div>
                <div className="links mb-5">
                    <h3 className="font-bold mb-3 underline">Quick Links</h3>
                    <li className="my-2 list-none"><RouterLink to="/">Home</RouterLink></li>
                    <li className="my-2 list-none cursor-pointer"><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                    <li className="my-2 list-none cursor-pointer"><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
                    <li className="my-2 list-none cursor-pointer"><ScrollLink to="howitworks" smooth={true} duration={500}>How it Works</ScrollLink></li>
                    <li className="my-2 list-none cursor-pointer"><ScrollLink to="faqs" smooth={true} duration={500}>FAQs</ScrollLink></li>
                </div>
                <div className="social mb-5">
                    <h3 className="font-bold mb-3 underline">Contact Us</h3>
                    <FontAwesomeIcon icon={faTwitter}  className="text-xl mr-3"/>
                    <FontAwesomeIcon icon={faFacebook} className="text-xl mx-3" />
                    <FontAwesomeIcon icon={faInstagram} className="text-xl mx-3" />
                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl mx-3" />
                </div>
                <div className="newsletter">
                    <h3 className="font-bold mb-3 underline">Subscribe to Our Newsletter</h3>
                    <form className="relative mb-5">
                        <input type="email" name="newsletter" id="newsletter" placeholder="Email" className="w-full p-3 rounded-md" />
                        <input type="submit" value="Subscribe" className="rounded-r-md p-3 bg-blue-700 text-white absolute top-0 right-0" />
                    </form>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;