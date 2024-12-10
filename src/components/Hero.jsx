import { Link as RouterLink } from "react-router-dom";
import PropertyFilter from "./PropertyFilter";
const Hero = () => {
    return ( 
        <header className="p-4 pt-10 pb-72 md:py-40 hero relative md:mb-20">
            <div className="hero-container w-11/12 mx-auto">
                <div className="text md:w-6/12 py-3">
                    <h1 className="text-4xl font-bold mb-3 text-blue-700 md:text-5xl mb-10 md:mb-0">FIND THE PERFECT HOME THAT SUITES YOUR TASTE</h1>
                    <p className="text-xl text-black mb-5 hidden md:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur similique animi maxime et placeat beatae accusantium quisquam dignissimos hic.</p>
                    <RouterLink className="bg-blue-700 rounded-md shadow-md text-slate-50 px-4 py-3 my-2" to="/usertype"> <button>Get Started</button></RouterLink>
                </div>
            </div>
            <div className="absolute md:w-10/12 md:left-[10%] md:-bottom-20 hidden md:block">
                <PropertyFilter />
            </div>
        </header>
     );
}
 
export default Hero;