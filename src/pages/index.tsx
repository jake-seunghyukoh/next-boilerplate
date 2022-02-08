import { ReactNode } from 'react';

export function Home(): ReactNode {
  if (typeof window === undefined) return null;

  return <div></div>;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Home;
