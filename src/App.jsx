import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Achutham Software India Pvt Ltd - IT Consulting & AI Agent Development</title>
        <meta name="description" content="Leading IT consulting firm specializing in AI agent development, automation solutions, and digital transformation. Transform your business with cutting-edge AI technology from Achutham Software." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;