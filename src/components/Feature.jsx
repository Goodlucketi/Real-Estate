import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = ({title, description, icon}) => {
    return ( 
        <main className="shadow-md rounded-lg p-2 text-white border">
            <div className="feature p-4">
                <FontAwesomeIcon icon={icon} className="text-4xl mb-3" />
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </main>
     );
}
 
export default Feature;