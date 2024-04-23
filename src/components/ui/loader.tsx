import React from 'react';
import pedro from '@/assets/racoon-pedro.gif';

interface LoaderProps {
  overlay?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ overlay }) => {
  return (
    <>
      {overlay && <div className="bg-dark-800 fixed inset-0 flex items-center justify-center bg-opacity-50" />}
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="h-16 w-16">
          <img src={pedro} alt="racoon" />
        </div>
      </div>
    </>
  );
};

export default Loader;
