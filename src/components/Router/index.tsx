import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  ReactElement,
} from 'react';
import NotFound from '../../pages/NotFound';

interface RouterProps {
  basename?: string;
  children?: ReactElement<{ path: string }> | ReactElement<{ path: string }>[];
}

export const RouteContext = createContext({
  routename: '/',
  setRoutename: (path: string) => {},
});

const Router = ({
  basename = '/',
  children,
}: RouterProps): React.ReactElement | null => {
  const [routename, setRoutename] = useState(basename);
  const [renderPage, setRenderPage] = useState(children);

  const routeContextValue = useMemo(
    () => ({
      routename,
      setRoutename,
    }),
    [routename, setRoutename]
  );

  useEffect(() => {
    if (!Array.isArray(children)) {
      const isMatchPathname = children?.props.path === window.location.pathname;
      setRenderPage(isMatchPathname ? children : <NotFound />);
      return;
    }

    const matchPathname = children.find(
      ({ props }) => props.path === window.location.pathname
    );

    window.addEventListener('popstate', () => {
      setRoutename(window.location.pathname);
    });

    setRenderPage(matchPathname);

    return () => {
      window.removeEventListener('popstate', () => {
        setRoutename(window.location.pathname);
      });
    };
  }, [routename]);

  return (
    <RouteContext.Provider value={routeContextValue}>
      {renderPage}
    </RouteContext.Provider>
  );
};

export default Router;
