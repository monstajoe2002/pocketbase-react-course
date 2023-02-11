import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import { isUserValid } from "./lib/pocketbase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={isUserValid ? <Home /> : <Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="create" element={<CreateTask />} />
      <Route path="edit/:id" element={<EditTask />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
