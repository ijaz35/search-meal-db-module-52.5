import './App.css';
import Resturant from './components/Resturant/Resturant';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/search" element={<Resturant></Resturant>}></Route>
        <Route path="/meal/:mealID" element={<MealDetail></MealDetail>}></Route>
      </Routes>

    </div>
  );
}

export default App;
