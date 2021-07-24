import "./App.css";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
