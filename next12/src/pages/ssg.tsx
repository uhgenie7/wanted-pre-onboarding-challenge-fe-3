import Link from 'next/link';

export async function getStaticProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}

const SSG = ({ time }: { time: string }) => {
  return (
    <>
      <h1>{time}</h1>
      <p>정적 사이트를 생성하는 SSG.</p>
      <p>개발모드에서는 SSR처럼 동작하지만 빌드 시 SSG가 된다.</p>
      <p>빌드 후 새로고침을 해도 시간이 바뀌지 않음.</p>
    </>
  );
};

export default SSG;
