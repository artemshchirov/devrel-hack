import React, { FC } from 'react';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

interface PageProps {
  children: React.ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen p-3 bg-gray-500 dark:bg-gray-700 ">
      <Header />
      <main className="flex flex-col justify-center h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
