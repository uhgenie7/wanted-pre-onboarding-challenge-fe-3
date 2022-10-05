import { useState } from "react";

const useRouter = () => {
  const [push, setState] = useState("");

  return push;
};

export default useRouter;
