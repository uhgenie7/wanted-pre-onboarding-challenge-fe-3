const About = () => {
  return (
    <>
      about
      <button
        onClick={(e) => {
          history.pushState(null, null, "/");
        }}
      >
        go main
      </button>
    </>
  );
};

export default About;
