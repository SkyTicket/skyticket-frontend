import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketListPage from "./pages/TicketListPage";

function App() {
  return (
    <Router>
      <TicketListPage/>
    </Router>
  );
}

export default App;
