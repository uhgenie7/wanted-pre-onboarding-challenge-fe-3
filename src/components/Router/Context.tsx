import { createContext } from 'react';

const RouteContext = createContext({
  routename: '/',
  setRoutename: (path: string) => {},
});

export default RouteContext;
