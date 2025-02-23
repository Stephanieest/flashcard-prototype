import { ThemeProvider } from "./components/ThemeComponents/ThemeProvider"
import Homepage from "./components/HomePage"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/SignUp";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


export default function App() {
  return ( 
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </Router>
    </ThemeProvider>
    
  )
}

