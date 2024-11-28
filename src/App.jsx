import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "./components/fragments/detailpage/accordion";
import HomepageForm from "./components/fragments/homepageform/homepageForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomepageForm /> <Accordion />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
