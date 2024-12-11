import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
const ClientLogin = () => {
    const navigation = useNavigate()
    const onSubmit = (e)=>{
        e.preventDefault()
        navigation("/listings")
    }
    return ( 
        <main>
            <Navbar />
            <Login title="Client Login" usertype="client_signup" onSubmit={onSubmit}/>
        </main>
     );
}
 
export default ClientLogin;