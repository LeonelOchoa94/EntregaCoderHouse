import { ItemListContainer } from '../src/components/itemListContainer/ItemListContainer';
import { NavBar } from '../src/components/navbar/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a SoftNova E-Commerce' />
    </>
  );
}

export default App;
