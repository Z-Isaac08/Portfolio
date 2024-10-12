import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<div>Chargement...</div>}>
          <Header />
          <Hero />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
