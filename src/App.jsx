import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOrder from "./pages/PageOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order-ticket" element={<PageOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
