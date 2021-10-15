import type { ReactElement, ReactNode } from 'react';

type Props = {
  to: string;
  children?: ReactNode;
  className?: string;
};

function Anchor(props: Props): ReactElement {
  const { to, children, className } = props;

  return (
    <a
      rel="noopener noreferrer"
      href={to}
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
}

export default Anchor;
