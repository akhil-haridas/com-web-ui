import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRoutes from "./routes/Routes";
import Spinner from "./components/Fallback/Spinner";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<AllRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
