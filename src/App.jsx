import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageOrder from "./pages/PageOrder";
import AccountPage from "./pages/AccountPage";
import TicketListPage from "./pages/TicketListPage";
import TicketListPageNotFound from "./pages/TicketListNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/ticket-list" element={<TicketListPage />} />
        <Route path="/order-ticket" element={<PageOrder />} />
        <Route path="*" element={<TicketListPageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
