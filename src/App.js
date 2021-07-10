import Navegacion from './components/Navegacion/Navegacion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ItemDetail from './pages/ItemDetail';
import CategoryDetail from './pages/CategoryDetail';
import AllCat from './components/AllCat/AllCat';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemsProvider } from './ItemsContext';
import {CartProvider} from './contexts/CartContext'


function App() {

  return (
    <ItemsProvider>
    <CartProvider>
      <div>
        <Router>
          <div className="App">
            <Navegacion brandname={" Nico ecommerce"} categoriauno={"Personajes de Better Call Saul"} categoriados={"Personajes de Breaking Bad"} categoriacuatro={"Catalogo completo"} />
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
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
