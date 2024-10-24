import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Skills = lazy(() => import('./components/Skills/Skills'))
const Spacing = lazy(() => import('./components/Spacing/Spacing'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Contacts = lazy(() => import('./components/Contact/Conctact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

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
          <Spacing size='md' />
          <Projects />
          <Spacing size='md' />
          <Contacts />
          <Spacing size='sm' />
          <Footer />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
