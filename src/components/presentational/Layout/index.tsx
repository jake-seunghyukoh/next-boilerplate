import { ReactChild } from 'react';
import Footer from '../Footer/footer';
import NavigationBar from '../NavBar/navigationBar';
import LoadingLayout from './loading';

export enum FlexPositionEnums {
  START = 'start',
  CENTER = 'center',
  END = 'end',
}

interface layoutProps {
  children: ReactChild;
  isLoading?: boolean;
  backgroundColor?: string;
  justify?: FlexPositionEnums;
  items?: FlexPositionEnums;
  footer?: boolean;
}

export default function DefaultLayout({
  children,
  isLoading = false,
  backgroundColor: color = '#FFFFFF',
  justify = FlexPositionEnums.CENTER,
  items = FlexPositionEnums.CENTER,
  footer = false,
}: layoutProps) {
  if (isLoading) {
    return <LoadingLayout footer={footer} />;
  }

  if (footer) {
    return (
      <div>
        <div className="w-full min-h-screen bg-[#FFFFFF] relative">
          <NavigationBar />
          <main
            className={`min-h-[calc(100vh-80px)] w-full py-20 flex justify-${justify} items-${items} bg-[${color}]`}
          >
            {children}
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <main
        className={`min-h-[calc(100vh-80px)] w-full py-20 flex justify-center items-center bg-[${color}] `}
      >
        {children}
      </main>
    </div>
  );
}
