import { useContext } from 'react';
import RouteContext from '../components/Router/Context';
import { removeLastSlash } from '../utils/path';

// https://github.com/vercel/next.js/blob/canary/packages/next/shared/lib/router/router.ts#L1146

const useRouter = () => {
  const { setRoutename } = useContext(RouteContext);

  const push = (path: string) => {
    if (window.location.pathname === path) return;

    history.pushState(null, '', removeLastSlash() + path);
    setRoutename(path);
  };

  return { push };
};

export default useRouter;
