import React, { FC } from 'react';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

interface PageProps {
  children: React.ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-3 dark:bg-gray-700">
      <Header />
      <main className="flex flex-col items-center justify-center h-full w-max">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
