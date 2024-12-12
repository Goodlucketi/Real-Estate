import About from "../components/About"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import Listing from "../components/Listing"
import property from "../assets/images/property.jpeg"
import property1 from "../assets/images/property1.jpeg"
import property2 from "../assets/images/property2.jpeg"
import property3 from "../assets/images/property3.jpg"
import property4 from "../assets/images/property4.jpg"
import property5 from "../assets/images/property5.jpg"
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

                <div className="grid md:grid-cols-3 w-11/12 mx-auto">
                    <Listing 
                        listingCost="N200,000" 
                        listingOption="Rent" 
                        listingType="1 bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property3} 
                    />
                    <Listing 
                        listingCost="N150,000" 
                        listingOption="Rent" 
                        listingType="Single Room" 
                        listingLocation ="Uyo"
                        listingImg = {property5} 
                    />
                    <Listing 
                        listingCost="N180,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property1} 
                    />
                    <Listing 
                        listingCost="N350,000" 
                        listingOption="Rent" 
                        listingType="3 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property} 
                    />
                    <Listing 
                        listingCost="N220,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property2} 
                    />
                    <Listing 
                        listingCost="N280,000" 
                        listingOption="Rent" 
                        listingType="2 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property4} 
                    />
                </div>
                <RouterLink className="bg-blue-700 rounded-md shadow-md text-white px-4 py-3 my-2 mx-auto text-center w-8/12 md:w-3/12 block" to="/client_login"> <button>See More</button></RouterLink>
            </div>
            <Features />
            <Testimonials />
            <Contact />
            <Footer />
        </header>
    )
}

export default HomePage