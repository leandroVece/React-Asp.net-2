import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home';
import Cadete from './components/Cadete';
import Pedido from './components/Pedido';
import Cliente from './components/Cliente';
import Error from "./components/Error";

const AppRoutes = [
  {
    index: true,
    name: "Home",
    path: '/',
    private: false,
    element: <Home />
  },
  {
    name: "Cadete",
    path: '/cadete',
    private: true,
    element: <Cadete />
  },
  {
    name: "Cliente",
    path: '/cliente',
    private: true,
    element: <Cliente />
  },
  {
    name: "Pedido",
    path: '/pedido',
    private: true,
    element: <Pedido />
  },
  {
    name: "Login",
    path: '/login',
    private: false,
    publicOnly: true,
    element: <Login />
  },
  {
    name: "Register",
    path: '/register',
    private: false,
    publicOnly: true,
    element: <Register />
  }
];

const ErrorPath = {
  path: '/error',
  private: false,
  element: <Error />,
}

export { AppRoutes, ErrorPath };

