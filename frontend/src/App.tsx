import './styles/main.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GeneratePage from './pages/GeneratePage';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="recipes/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
