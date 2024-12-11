import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./views/HomePage"
import UserType from './views/userType';
import AgentSignup from './views/AgentSignup';
import Support from './views/Support';
import ClientSignup from './views/ClientSignup';
import ClientLogin from './views/ClientLogin';
import AgentLogin from './views/AgentLogin';
import ListingsPage from './views/ListingsPage';
import PropertyUploadForm from './views/PropertyUploadForm';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/usertype' element={<UserType />} />
        <Route path='/client_signup' element={<ClientSignup />} />
        <Route path='/client_login' element={<ClientLogin />} />
        <Route path='/agent_signup' element={<AgentSignup />} />
        <Route path='/agent_login' element={<AgentLogin />} />
        <Route path='/support' element={<Support />} />
        <Route path='/listings' element={<ListingsPage />} />
        <Route path='/upload' element={<PropertyUploadForm />} />
      </Routes>
    </Router>
  )
}

export default App
