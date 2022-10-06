import useRouter from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>root</h2>
      <button
        onClick={() => {
          push('/about');
        }}
      >
        about
      </button>
    </>
  );
};

export default Root;
