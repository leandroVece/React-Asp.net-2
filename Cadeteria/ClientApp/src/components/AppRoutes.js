import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home';
import Cadete from './components/Cadete';
import Pedido from './components/Pedido';
import Cliente from './components/Cliente';
/*import FormPedido from './components/Pedido/FormPedido';
import TomarPedido from './components/PedidoCadete/TomarPedido';
import PedidoCanComp from './components/PedidoCanComp/PedidoCanComp';*/

const AppRoutes = [
  {
    // to: '/',
    index: true,
    element: <Home />
  },
  {
    // to: '../login',
    path: '/login',
    element: <Login />

  },
  {
    // to: '../Register',
    path: '/register',
    element: <Register />

  },
  {
    // to: '../cadete',
    path: '/cadete',
    element: <Cadete />

  },
  {
    //to: '../cliente',
    path: '/cliente',
    element: <Cliente />

  },
  {
    // to: '../pedido',
    path: '/pedido',
    element: <Pedido />

  },
];

export default AppRoutes;

// {
//   index: true,
//     element: <Home />
// },
// {
//   path: '/counter',
//     element: <Counter />
// },
// {
//   path: '/fetch-data',
//     element: <FetchData />
