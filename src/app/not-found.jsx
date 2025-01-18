// pages/404.js

import Head from 'next/head';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - 404</title>
        <meta name="description" content="Oops! The page you are looking for could not be found." />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
        <Container>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h1>
          <p style={{ fontSize: '1.5rem' }}>Oops! The page you're looking for doesn't exist.</p>
          <Link href="/">
            <Button variant="primary" size="lg" href="/">Go to Homepage</Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Custom404;
