import type { MouseEvent, ReactElement, ReactNode } from 'react';

type Props = {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  children?: ReactNode;
  className?: string;
};

function Anchor(props: Props): ReactElement {
  const { href, onClick, children, className } = props;

  return (
    <a
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}

export default Anchor;
