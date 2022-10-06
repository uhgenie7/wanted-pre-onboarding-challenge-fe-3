const NotFound = () => {
  return (
    <>
      <h2>404</h2>
      <button onClick={() => history.back()}>뒤로 가기</button>
    </>
  );
};

export default NotFound;
