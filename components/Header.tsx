import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-bottom: 1px solid #d8d8d8;
`;

const Content = styled.div`
  max-width: 1180px;
  width: 100%;
  height: 100%;
`;

type Props = {
  children?: ReactNode;
  className?: string;
};

function Header(props: Props): ReactElement {
  const { children, className } = props;

  return (
    <Wrapper className={className}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Header;
