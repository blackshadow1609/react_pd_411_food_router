import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';


function App() {
  const text = {
    title: "Welcome to The MealDB",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world. We offer a free recipe API for anyone wanting to use it, with additional premium features if required."
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About text={text} />} />
          <Route path="contacts" element={<Contacts />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
