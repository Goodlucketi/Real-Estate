
import { Link as RouterLink } from "react-router-dom";
import interior from "../assets/images/about.jpg"
const About = () => {
    return ( 
        <main className="py-10 my-10">
            <div className="about md:flex items-center justify-center gap-10 mx-auto w-11/12">
                <div className="image mb-5 md:w-6/12">
                    <img src={interior} alt="House Interior" className="rounded-lg" />
                </div>
                <div className="text my-5 md:w-5/12">
                    <h2 className="border-l-4 p-2 border-slate-600 text-3xl font-bold mb-3 text-blue-700">About Our Properties</h2>
                    <p className="text-lg mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit voluptates ea molestias saepe repellendus quia rerum ab deserunt sunt!</p>
                    <RouterLink className="bg-blue-700 rounded-md shadow-md text-slate-50 px-4 py-3 my-2" to="/about"> <button>Read More</button></RouterLink>
                </div>
            </div>
        </main>
     );
}
 
export default About;