import About from "../components/About"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import list1ng1 from "../assets/images/listing1.jpg"
import Listing from "../components/Listing"
import Footer from "../components/Footer"
import { Link as RouterLink } from "react-router-dom"

const HomePage = ()=>{
    return(
        <header>
            <Navbar />
            <Hero />
            <About />
            <div className="featuredLists mb-10">
                <h2 className="text-3xl font-bold text-blue-700 text-center my-5">Featured Listing</h2>

                <div className="grid md:gap-5 md:grid-cols-4 w-11/12 mx-auto">
                <Listing 
                    listingCost="N150,000" 
                    listingOption="Rent" 
                    listingType="Self Contained" 
                    listingLocation ="Uyo"
                    listingImg = {list1ng1} 
                />
                <Listing 
                    listingCost="N150,000" 
                    listingOption="Rent" 
                    listingType="Self Contained" 
                    listingLocation ="Uyo"
                    listingImg = {list1ng1} 
                />
                <Listing 
                    listingCost="N150,000" 
                    listingOption="Rent" 
                    listingType="Self Contained" 
                    listingLocation ="Uyo"
                    listingImg = {list1ng1} 
                />
                <Listing 
                    listingCost="N150,000" 
                    listingOption="Rent" 
                    listingType="Self Contained" 
                    listingLocation ="Uyo"
                    listingImg = {list1ng1} 
                />
                </div>
                <RouterLink className="bg-blue-700 rounded-md shadow-md text-white px-4 py-3 my-2 mx-auto text-center w-8/12 md:w-3/12 block" to="/usertype"> <button>See More</button></RouterLink>
            </div>
            <Features />
            <Testimonials />
            <Contact />
            <Footer />
        </header>
    )
}

export default HomePage