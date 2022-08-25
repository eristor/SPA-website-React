import Header from './components/header/Header';
import "./app.css";
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Content from './components/Content/Content';
import PageNotFound from './components/PageNotFound/PageNotFound';
import {  Routes,  Route,  Link,} from 'react-router-dom';
import ItemPaper from './components/item_paper/ItemPaper';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={[<Banner />, <Content />]} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/ItemPaper" element={<ItemPaper />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
