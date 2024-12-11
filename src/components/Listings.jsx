import list1ng1 from "../assets/images/listing1.jpg"
import property from "../assets/images/property.jpeg"
import property1 from "../assets/images/property1.jpeg"
import property2 from "../assets/images/property2.jpeg"
import property3 from "../assets/images/property3.jpg"
import property4 from "../assets/images/property4.jpg"
import property5 from "../assets/images/property5.jpg"
import property6 from "../assets/images/property6.jpeg"
import property7 from "../assets/images/property7.jpg"
import property8 from "../assets/images/property8.jpg"
import property9 from "../assets/images/property9.jpg"


import Listing from "./Listing";
const Listings = () => {
    return ( 
        <main className="my-5 py-5">
            <div className="w-11/12 mx-auto p-2 md:p-4">
                <h2 className="text-3xl font-bold mb-3 text-blue-700 text-center my-5">Featured Listing</h2>
                <div className="testimonial md:p-4 grid md:gap-10 md:grid-cols-3">
                   <Listing 
                        listingCost="N180,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property} 
                    />

                    <Listing 
                        listingCost="N250,000" 
                        listingOption="Rent" 
                        listingType="2 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property1} 
                    />

                    <Listing 
                        listingCost="N120,000" 
                        listingOption="Rent" 
                        listingType="Single Room" 
                        listingLocation ="Uyo"
                        listingImg = {property2} 
                    />

                    <Listing 
                        listingCost="N220,000" 
                        listingOption="Rent" 
                        listingType="1 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property3} 
                    />

                    <Listing 
                        listingCost="N150,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property4} 
                    />

                    <Listing 
                        listingCost="N350,000" 
                        listingOption="2 Bedroom Flat" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property5} 
                    />

                    <Listing 
                        listingCost="N450,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property6} 
                    />

                    <Listing 
                        listingCost="N100,000" 
                        listingOption="Rent" 
                        listingType="Single Room" 
                        listingLocation ="Uyo"
                        listingImg = {property7} 
                    />

                    <Listing 
                        listingCost="N180,000" 
                        listingOption="Rent" 
                        listingType="Self Contained" 
                        listingLocation ="Uyo"
                        listingImg = {property8} 
                    />

                    <Listing 
                        listingCost="N220,000" 
                        listingOption="Rent" 
                        listingType="1 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {property9} 
                    />

                     <Listing 
                        listingCost="N220,000" 
                        listingOption="Rent" 
                        listingType="1 Bedroom Flat" 
                        listingLocation ="Uyo"
                        listingImg = {list1ng1} 
                    />
                </div>
            </div>
        </main>
     );
}
 
export default Listings;