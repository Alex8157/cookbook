import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import RecipePage from "./pages/RecipePage";
import styles from './styles/app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="category/:category/recipe/:recipe" element={<RecipePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
