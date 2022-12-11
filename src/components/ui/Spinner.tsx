import { FC } from 'react';

const Spinner: FC = () => {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div role="status">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
