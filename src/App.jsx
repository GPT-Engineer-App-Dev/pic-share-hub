import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Upload from "./pages/Upload.jsx";
import Feed from "./pages/Feed.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;