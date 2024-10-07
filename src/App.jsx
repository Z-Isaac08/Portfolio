import { lazy, Suspense } from "react";

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));

const App = () => {
  return (
    <main>
      <Suspense fallback={<div>Chargement...</div>}>
        <Header />
        <Hero />
      </Suspense>
    </main>
  );
}

export default App;
