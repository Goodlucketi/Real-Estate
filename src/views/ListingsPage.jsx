import Footer from "../components/Footer";
import Listings from "../components/Listings"
import PropertyFilter from "../components/PropertyFilter"
import Navbar from "../components/Navbar";
const ListingsPage = () => {
    return ( 
        <main>
            <Navbar />
            <PropertyFilter />
            <Listings />
            <Footer />
        </main>
     );
}
 
export default ListingsPage;