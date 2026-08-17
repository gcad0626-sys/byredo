import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import HeroBanner from '../components/home/HeroBanner';
import BrandIntroBanner from '../components/home/BrandIntroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import LiveSearchRank from '../components/home/LiveSearchRank';
import BestProducts from '../components/home/BestProducts';
import QuizEntry from '../components/home/QuizEntry';

const Home: React.FC = () => {
  return (
    <AppLayout>
      <AppHeader />
      <main className="app-main" id="home-main" style={{ flex: '1 1 auto', minHeight: 0, overflowY: 'auto', paddingBottom: 'var(--tabbar-h)' }}>
        <HeroBanner />
        <BrandIntroBanner />
        <CategoryGrid />
        <LiveSearchRank />
        <BestProducts />
        <QuizEntry />
      </main>
    </AppLayout>
  );
};

export default Home;
