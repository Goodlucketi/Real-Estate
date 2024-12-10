
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return ( 
        <main className="contact py-4">
            <div className="contact-us w-10/12 mx-auto">
                <h2 className="text-3xl font-bold mb-3 text-blue-700 text-center my-5">Contact Us</h2>
                <div className="contact-info md:flex items-center justify-center md:gap-10 my-5">
                    <div className="contactlinks md:w-6/12">
                        <div className="address my-5">
                            <FontAwesomeIcon icon={faLocationDot} className="text-2xl  text-blue-700" />
                            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi ea iusto, voluptate mollitia ab animi praesentium veritatis qui tenetur.</p>
                        </div>
                        <div className="phone my-5">
                            <FontAwesomeIcon icon={faPhone} className="text-2xl  text-blue-700" />
                            <p>+234 (0) 907 829 164</p>
                        </div>
                        <div className="social my-5  text-blue-700">
                            <FontAwesomeIcon icon={faTwitter}  className="text-xl mx-3"/>
                            <FontAwesomeIcon icon={faFacebook} className="text-xl mx-3" />
                            <FontAwesomeIcon icon={faInstagram} className="text-xl mx-3" />
                        </div>
                    </div>

                    <div className="contact-form md:w-6/12">
                        <h3 className="font-bold my-5 text-xl">Have an Enquiry? Send us a Message</h3>
                        <form className="md:p-8 md:border-l-2 md:border-r-2 rounded-lg">
                            <div className="mb-5">
                                <input type="text" name="name" id="name" placeholder="Name (First Name Last Name)" className="p-3 w-full rounded-md border-2 border-slate-300"/>
                            </div>
                            <div className="mb-5">
                                <input type="email" name="email" placeholder="Email"className="p-3 w-full rounded-md border-2 border-slate-300" />
                            </div>
                            <div className="mb-5">
                            <textarea name="message" id="message" placeholder="Type Message Here"className="p-3 w-full rounded-md border-2 border-slate-300"></textarea>
                            </div>
                            <div className="mb-5">
                                <input type="submit" value="Send Message" className="p-3 w-full rounded-md border-2 bg-blue-700 text-white" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
     );
}
 
export default Contact;