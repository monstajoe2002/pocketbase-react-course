import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
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
