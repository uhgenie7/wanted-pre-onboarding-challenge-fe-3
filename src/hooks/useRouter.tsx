import { useContext } from 'react';
import RouteContext from '../components/Router/Context';

// https://github.com/vercel/next.js/blob/canary/packages/next/shared/lib/router/router.ts#L1146

const useRouter = () => {
  const { setRoutename } = useContext(RouteContext);

  const push = (path: string) => {
    if (window.location.pathname === path) return;

    history.pushState(null, '', path);
    setRoutename(window.location.pathname);
  };

  return { push };
};

export default useRouter;
