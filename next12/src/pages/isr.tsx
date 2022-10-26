import Link from 'next/link';

export async function getStaticProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

const ISR = ({ time }: { time: string }) => {
  return (
    <>
      <h1>{time}</h1>
      <p>특정 주기로 데이터를 가져와서 다시 그리는 ISR.</p>
    </>
  );
};

export default ISR;
