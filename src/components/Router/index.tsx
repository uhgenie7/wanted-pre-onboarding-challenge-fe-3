import React, {
  useState,
  useEffect,
  useMemo,
  ReactElement,
  Children,
  isValidElement,
  ReactNode,
} from 'react';
import RouteContext from './Context';

export interface PathRouteProps {
  component?: React.ReactNode | null;
  path: string;
}

interface RouterProps {
  basename?: string;
  children?: ReactElement<{ path: string }> | ReactElement<{ path: string }>[];
}

export const Route = ({
  component,
}: PathRouteProps): React.ReactElement | null => {
  return <>{component}</>;
};

const Router = ({
  basename = '/',
  children,
}: RouterProps): React.ReactElement | null => {
  const [routename, setRoutename] = useState(basename);
  const [renderPage, setRenderPage] = useState<ReactNode>();

  const routeContextValue = useMemo(
    () => ({
      routename,
      setRoutename,
    }),
    [routename, setRoutename]
  );

  const currentElement = Children.toArray(children).find((element) => {
    if (!isValidElement(element)) return;

    return element.props.path === window.location.pathname;
  });

  useEffect(() => {
    currentElement
      ? setRenderPage(currentElement)
      : setRenderPage(Children.toArray(children).at(-1));

    window.addEventListener('popstate', () => {
      setRoutename(window.location.pathname);
    });

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
