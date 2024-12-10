import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
const AgentSignup = () => {
    return ( 
        <main>
            <Navbar />
            <SignUp title="Agent Sign Up" usertype="agent_login" />
        </main>
     );
}
 
export default AgentSignup;