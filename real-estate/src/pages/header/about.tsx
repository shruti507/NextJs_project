// pages/about.tsx
import { FC } from 'react';
import Head from 'next/head';
import Header from '../../components/header'; // Ensure this path is correct

const About: React.FC = () => {
    const handleSetProperties = (properties: any[]) => {
        // Implementation to handle setting properties
      };
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About us page" />
      </Head>
      <Header setProperties={handleSetProperties} />
      <main>
        <h1>About Us</h1>
        <p>Welcome to the About Us page!</p>
      </main>
    </>
  );
};

export default About;
