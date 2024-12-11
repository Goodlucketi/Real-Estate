import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Listings from "../components/Listings"
import PropertyFilter from "../components/PropertyFilter"

const ListingsPage = () => {
    return ( 
        <main>
            <nav className="py-3 px-8 bg-blue-700 text-white sticky top-0 left-0 z-10">
                <Link to="/"><h2 className="font-bold text-2xl">HOMZ</h2></Link>
            </nav>
            <PropertyFilter />
            <Listings />
            <Footer />
        </main>
     );
}
 
export default ListingsPage;