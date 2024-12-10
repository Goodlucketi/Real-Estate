import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

const ClientSignup = () => {
    return ( 
        <main>
            <Navbar />
            <SignUp title="Client Sign Up" usertype="client_login" />
        </main>
     );
}
 
export default ClientSignup;