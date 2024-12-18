import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import kitchen from "../assets/images/kitchen.jpeg"
import toilet from "../assets/images/toilet.jpg"
import front from "../assets/images/frontView.jpg"
import interior from "../assets/images/interior.jpg"
const Listing = ({listingCost, listingOption, listingType, listingLocation, listingImg}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const listingDetailsModal = ()=>{
        setModalOpen(true)   
    }

    const closeModal = ()=>{
        setModalOpen(false)
    }
    return ( 
        <main className="p-4">
            <div className="listing relative shadow-md rounded-md">
                <img src={listingImg} alt="Listing image" className="h-52 w-full object-cover rounded-t-md" />
                <div className="px-4 grid grid-cols-2 gap-x-5 items-center">
                    <p className="font-bold text-lg bg-blue-700 text-center text-white p-2 rounded-md my-2">{listingCost}</p>
                    <h3 className="font-bold text-lg">{listingType}</h3>
                    <p><span className="font-bold text-xl">Location:</span> {listingLocation}</p>
                    <p className="font-bold text-xl">{listingOption}</p>
                </div>
                <div className="action px-4 py-3">
                    <button onClick={listingDetailsModal} className="view block w-full px-8 text-lg rounded-md py-2 bg-blue-700 text-white">View</button>
                </div>
            </div>
            {modalOpen && (
                <div className="listingDetailsModal h-screen bg-slate-100/90 p-4 py-16 mx-auto fixed overflow-scroll top-0 left-0 w-full z-10">
                    <FontAwesomeIcon onClick={closeModal} icon={faX} className="text-lg bg-blue-700 p-1 absolute top-30 right-10 text-white" />
                    <div className="modal md:w-10/12 mx-auto ">
                        <h3 className="text-3xl px-4 mb-3 text-blue-700 font-bold">Property Details</h3>
                        <div className="details md:flex gap-10 px-4">
                            <div className="image grid md:grid-cols-2 gap-5 mb-5">
                                <img src={kitchen} alt="kitchen Picture" className="block w-full h-60 object-cover" />
                                <img src={toilet} alt="toilet Picture" className="block w-full h-60 object-cover object-bottom" />
                                <img src={front} alt="Front view of a house" className="block w-full h-60 object-cover" />
                                <img src={interior} alt="Front view of a house" className="block w-full h-60 object-cover" />
                            </div>
                            <div className="details px-4">
                                <p className="mb-3 text-xl"><span className="font-bold">Price:</span> N350,000</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Agent Name:</span> Prince Akpan</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Status:</span>Available</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Type:</span> 3 Bedroom Flat</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Address:</span> 20 Nsit Ikpa Street, Uyo, Akwa Ibom State, Nigeria</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Amenities:</span> 2 Toilets, Bathroom, Kitchen, 2 Bedrooms</p>
                                <p className="mb-3 text-xl"><span className="font-bold">Agent Contact:</span> 08012345783</p>
                                <button className="py-3 px-8 hover:bg-blue-500 duration-1000 transition-all mx-5 bg-blue-700 rounded-md text-white my-3">Contact Agent</button>
                                <button className="py-3 px-8 hover:bg-blue-500 duration-1000 transition-all mx-5 bg-blue-700 rounded-md text-white my-3">Save</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}
        </main>
     );
}
 
export default Listing;