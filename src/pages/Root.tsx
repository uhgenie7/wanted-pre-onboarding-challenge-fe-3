import useRouter from "../hooks/useRouter";

const Root = () => {
  //   const { push } = useRouter();
  return (
    <>
      root
      <button
        onClick={(e) => {
          history.pushState(null, null, "/about");
        }}
      >
        about
      </button>
    </>
  );
};

export default Root;
