import Link from 'next/link';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}

const Home = ({ time }: { time: string }) => {
  return (
    <>
      <h1>{time}</h1>
      <p>서버에서 콘솔이 찍히는 SSR</p>
      <p>새로고침할때마다 서버에 요청함</p>
    </>
  );
};

export default Home;
