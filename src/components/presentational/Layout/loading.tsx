import Loading from 'react-loading';
import Footer from '../Footer/footer';
import NavigationBar from '../NavBar/navigationBar';

interface layoutProps {
  footer?: boolean;
}

export default function LoadingLayout({ footer }: layoutProps) {
  if (footer) {
    return (
      <div>
        <div className="w-full h-screen bg-[#FFFFFF] relative">
          <div className="absolute w-full z-50">
            <NavigationBar />
          </div>
          <main className="absolute top-0 w-full h-full flex items-center justify-center">
            <Loading
              type="spinningBubbles"
              color="#000000"
              height={50}
              width={50}
            />
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#FFFFFF] relative">
      <div className="absolute w-full">
        <NavigationBar />
      </div>
      <main className="absolute top-0 w-full h-full flex items-center justify-center">
        <Loading
          type="spinningBubbles"
          color="#000000"
          height={50}
          width={50}
        />
      </main>
    </div>
  );
}
