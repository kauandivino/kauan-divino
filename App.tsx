import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;