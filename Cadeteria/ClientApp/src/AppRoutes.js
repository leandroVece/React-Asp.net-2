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
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />

  },
  {
    path: '/register',
    element: <Register />

  },
  {
    path: 'cadete',
    element: <Cadete />

  },
  {
    path: 'cliente',
    element: <Cliente />

  },
  {
    path: 'pedido',
    element: <Pedido />
  },
];

export default AppRoutes;
