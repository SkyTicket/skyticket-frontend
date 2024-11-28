import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";
import HomePage from "./pages/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="*" element={<TicketListPageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
