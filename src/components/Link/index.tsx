import { AnchorHTMLAttributes } from 'react';
import useRouter from '../../hooks/useRouter';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = ({ href, ...rest }: LinkProps) => {
  const { push } = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    push(href);
  }

  return <a href={href} onClick={handleClick} {...rest} />;
};

export default Link;
