
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

import './styles.css'

function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
