import Navegacion from './components/Navegacion/Navegacion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ItemDetail from './pages/ItemDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CategoryDetail from './pages/CategoryDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemsProvider } from './contexts/ItemsContext/ItemsContext';
import { CartProvider } from './contexts/CartContext'
import 'semantic-ui-css/semantic.min.css'


function App() {

  return (
    <ItemsProvider>
      <CartProvider>
        <div>
          <Router>
            <div className="App">
              <Navegacion brandname={" React ecommerce"} categoriauno={"Notebooks"} categoriados={"Accesorios"} categoriatres={"Celulares"} categoriacuatro={"Monitores"} />
              <Switch>
                <Route path="/category/:id" component={CategoryDetail} />
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/detail/:name/:id" component={ItemDetail} />


              </Switch>
            </div>
          </Router>
        </div>
      </CartProvider>
    </ItemsProvider>
  )
}

export default App;
