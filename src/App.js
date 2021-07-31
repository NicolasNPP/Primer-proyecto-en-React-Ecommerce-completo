import Navegacion from './components/Navegacion/Navegacion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ItemDetail from './pages/ItemDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CartList from './components/CartList/CartList';
import CategoryDetail from './pages/CategoryDetail';
import AllCat from './components/AllCat/AllCat';
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
              <Navegacion brandname={" Nico ecommerce"} categoriauno={"Notebooks"} categoriados={"Accesorios"} categoriatres={"Celulares"} categoriacuatro={"Monitores"} />
              <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/detail/:id" component={ItemDetail} />
                <Route path="/category/breaking+bad+bettercallsaul" component={AllCat} />
                <Route path="/category/:id" component={CategoryDetail} />
              </Switch>
            </div>
          </Router>
        </div>
      </CartProvider>
    </ItemsProvider>
  )
}

export default App;
