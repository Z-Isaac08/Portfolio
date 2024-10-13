import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Skills = lazy(() => import('./components/Skills/Skills'))
const Spacing = lazy(() => import('./components/Spacing/Spacing'))

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<div>Chargement...</div>}>
          <Header />
          <Spacing size='lg' />
          <Hero />
          <Spacing size='md' />
          <Skills />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
