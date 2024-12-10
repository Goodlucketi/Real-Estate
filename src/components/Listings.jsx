import list1ng1 from "../assets/images/listing1.jpg"

import Listing from "./Listing";
const Listings = () => {
    return ( 
        <main className="my-10 py-10">
            <div className="w-11/12 mx-auto p-2 md:p-4">
                <h2 className="text-3xl font-bold mb-3 text-blue-700 text-center my-5">Featured Listing</h2>
                <div className="testimonial md:p-4 grid md:gap-10 md:grid-cols-3">
                   <Listing 
                        listingCost="N180,000" 
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
            </div>
        </main>
     );
}
 
export default Listings;