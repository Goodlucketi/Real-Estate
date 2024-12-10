import Login from "../components/Login";
import Navbar from "../components/Navbar";
const AgentLogin = () => {
    return ( 
        <main>
            <Navbar />
            <Login title="Agent Login" usertype="agent_signup" />
        </main>
     );
}
 
export default AgentLogin;