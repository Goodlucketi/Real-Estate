import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons/faUserAltSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserType = () => {
    return (
        <>
            <Navbar />
            <main className="userType p-10 flex flex-col h-screen justify-center">
                <div className="usertype">
                    <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Select User type</h2>
                    <div className=" md:flex items-center gap-10 justify-center">
                        <Link to="/agent_signup">
                            <div className="agent mb-5 bg-slate-50 p-20 shadow-md rounded-md hover:bg-blue-700 duration-1000 transition-all text-blue-700 hover:text-white text-center border cursor-pointer">
                                <FontAwesomeIcon icon={faUser} className="text-3xl" />
                                <h3 className="text-2xl">Agent</h3>
                            </div>
                        </Link>
                        <Link to="/client_signup">
                            <div className="client mb-5 bg-slate-50 p-20 shadow-md rounded-md hover:bg-blue-700 duration-1000 transition-all text-blue-700 hover:text-white text-center border cursor-pointer">
                                <FontAwesomeIcon icon={faUserAltSlash} className="text-3xl" />
                                <h3 className="text-2xl">Client</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default UserType;