const Listing = ({listingCost, listingOption, listingType, listingLocation, listingImg}) => {
    return ( 
        <main className="p-4">
            <div className="listing relative shadow-md rounded-md">
                <img src={listingImg} alt="Listing image" className="h-52 w-full object-cover rounded-t-md" />
                <div className="px-4 pb-4">
                    <p className="font-bold text-lg bg-blue-700 inline-block text-white p-2 rounded-md my-2">{listingCost}</p>
                    <h3 className="font-bold text-xl">{listingType}</h3>
                    <p>{listingLocation}</p>
                    <p>{listingOption}</p>
                </div>
            </div>
        </main>
     );
}
 
export default Listing;