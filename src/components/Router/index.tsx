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
import { BASE_URL } from '../../utils/path';

export interface PathRouteProps {
  component?: React.ReactNode | null;
  path: string;
}

interface RouterProps {
  children?: ReactElement<{ path: string }> | ReactElement<{ path: string }>[];
}

export const Route = ({
  component,
}: PathRouteProps): React.ReactElement | null => {
  return <>{component}</>;
};

const Router = ({ children }: RouterProps): React.ReactElement | null => {
  const [routename, setRoutename] = useState('/');
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
    return element.props.path === routename;
  });

  useEffect(() => {
    window.location.href === BASE_URL
      ? setRoutename('/')
      : setRoutename(window.location.href.replace(BASE_URL, '/'));

    currentElement
      ? setRenderPage(currentElement)
      : setRenderPage(Children.toArray(children).at(-1));

    window.addEventListener('popstate', () => {
      setRoutename(routename);
    });

    return () => {
      window.removeEventListener('popstate', () => {
        setRoutename(routename);
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
