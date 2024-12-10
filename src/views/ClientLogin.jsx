import Login from "../components/Login";
import Navbar from "../components/Navbar";
const ClientLogin = () => {
    return ( 
        <main>
            <Navbar />
            <Login title="Client Login" usertype="client_signup"/>
        </main>
     );
}
 
export default ClientLogin;