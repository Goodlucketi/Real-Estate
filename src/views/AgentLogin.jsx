import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
    
const AgentLogin = () => {
    const navigation = useNavigate()
    const onSubmit = (e)=>{
        e.preventDefault()
        navigation("/upload")
    }
    return ( 
        <main>
            <Navbar />
            <Login title="Agent Login" usertype="agent_signup" onSubmit={onSubmit} />
        </main>
     );
}
 
export default AgentLogin;