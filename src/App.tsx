import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import ReviewPage from './pages/reviewPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
