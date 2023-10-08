import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
const HomePage = React.lazy(() => import("../pages/HomePage"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default ProjectRoutes;
