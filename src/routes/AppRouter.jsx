import {
  Navigate, Route, Routes,
} from "react-router-dom";

import { Home } from "../pages";
import "../styles.scss";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRouter;