import useRouter from '../hooks/useRouter';

const About = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>about</h2>
      <button
        onClick={() => {
          push('/');
        }}
      >
        go main
      </button>
    </>
  );
};

export default About;
