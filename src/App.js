// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";

// styles
import "./App.css";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const TestsPage = lazy(() => import("./pages/TestsPage/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<TestsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
