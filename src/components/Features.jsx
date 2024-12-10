import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import Feature from "./Feature";
import { faHandshake } from "@fortawesome/free-regular-svg-icons/faHandshake";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons/faLifeRing";

const Features = () => {
    return ( 
        <main className="features py-4 md:p-4 md:py-8">
            <h2 className="text-center text-white text-3xl font-bold md:my-5">Features</h2>
            <div className="w-11/12 mx-auto p-4 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
                <Feature title="Affordable" description="Affordable rentals for every budget" icon={faMoneyBill}  />
                <Feature title="Trust and Safety" description="Verified Listings and Agents" icon={faHandshake}  />
                <Feature title="Variety of Listings" description="Various types of listing to suit your budget and preferences" icon={faLayerGroup}  />
                <Feature title="24/7 Customer Support" description="We have you covered 24/7 with our customer support" icon={faLifeRing}  />
            </div>
        </main>
     );
}
 
export default Features;