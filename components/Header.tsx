import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  box-sizing: border-box;
  height: 75px;
  border-bottom: 1px solid #d8d8d8;
`;

type Props = {
  children?: ReactNode;
  className?: string;
};

function Header(props: Props): ReactElement {
  const { children, className } = props;

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
}

export default Header;
