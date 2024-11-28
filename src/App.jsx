import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketListPage />} />
        <Route path="*" element={<TicketListPageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
