import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

const CSR = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    console.log('client');
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1>{time}</h1>
      <p>클라이언트에서 그리고 브라우저에 콘솔이 찍히는 CSR</p>
    </>
  );
};

export default CSR;

CSR.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
