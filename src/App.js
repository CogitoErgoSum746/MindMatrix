import './App.css';
// import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes';
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <AllRoutes />
    </AuthProvider>
    </Router>
   </div>
  );
}

export default App;
