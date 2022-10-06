// https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/components.tsx#L263

export interface PathRouteProps {
  component?: React.ReactNode | null;
  path: string;
}

const Route = ({ component }: PathRouteProps): React.ReactElement | null => {
  return <>{component}</>;
};

export default Route;
