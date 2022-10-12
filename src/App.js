import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from '../src/components/itemListContainer/ItemListContainer';
import { NavBar } from '../src/components/navbar/NavBar';
import { ItemContainer } from './components/itemContainer/ItemContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting='Bienvenidos a SoftNova E-Commerce' />} />
          <Route path={'/item'} element={<ItemContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
