import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
import PageWrapper from './PageWrapper';

// Lazy load pages for better initial bundle size
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Collection = lazy(() => import('../pages/Collection'));
const Certification = lazy(() => import('../pages/Certification'));
const Contact = lazy(() => import('../pages/Contact'));
const Gallery = lazy(() => import('../pages/Gallery'));

const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-brand-dark">
    <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/collection" element={<PageWrapper><Collection /></PageWrapper>} />
          <Route path="/certification" element={<PageWrapper><Certification /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
