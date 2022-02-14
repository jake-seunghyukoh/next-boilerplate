import Image from 'next/image';
import logoImage from 'public/favicon.ico';

const name = 'John Doe';

export default function NavigationBar() {
  return (
    <div className="w-screen h-20 container mx-auto flex items-center">
      <div className="flex items-center space-x-2">
        <Image alt="logo" src={logoImage} width={32} height={32} />
        <span className="font-bold">Service name</span>
      </div>
      <div className="flex-auto" />
      <div className="flex items-center space-x-2">
        <span>Hello,</span>
        <span>{name} 🤩</span>
      </div>
    </div>
  );
}
