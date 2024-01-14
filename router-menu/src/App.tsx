import "./App.css";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import TimeAttackPage from "./components/TimeAttackPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
  Outlet,
  createRoutesFromChildren,
  BrowserRouter as Router,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromChildren(
//     <Route
//       path="/"
//       element={
//         <main>
//           <Menu />
//           <div className="page">
//             <Route index element={<HomePage />} />
//             <Route path="drift" element={<DriftPage />} />
//             <Route path="timeattack" element={<TimeAttackPage />} />
//             <Route path="forza" element={<ForzaPage />} />
//           </div>
//         </main>
//       }
//     />
//   )
// createRoutesFromElements(
//   <Route
//     path="/"
//     element={
//       <main>
//         <Menu />
//         <div className="page">
//           <Route path="/" element={<HomePage />} />
//           <Route path="/drift" element={<DriftPage />} />
//           <Route path="/timeattack" element={<TimeAttackPage />} />
//           <Route path="/forza" element={<ForzaPage />} />
//         </div>
//       </main>
//     }
//   />
// )
// );

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="drift" element={<DriftPage />} />
            <Route path="timeattack" element={<TimeAttackPage />} />
            <Route path="forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
