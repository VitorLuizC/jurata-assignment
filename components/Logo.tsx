import type { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.figure`
  height: 32px;
  margin: 0;
  padding: 0;

  & > svg {
    height: 100%;
  }
`;

function Logo(): ReactElement {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182 36" >
        <title>Jurata Logo</title>
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop stop-color="#9AC4FA" offset="0%" />
            <stop stop-color="#669FEA" offset="100%" />
          </linearGradient>
          <linearGradient id="b" x1="3.26%" y1="2.81%" y2="86.22%">
            <stop stop-color="#84B0E9" offset="2.29%" />
            <stop stop-color="#6895CF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#FFF"
            d="M39.58 30.36c4.08 0 7.05-2.22 7.05-6.93V10h-4.3v13.37c0 1.92-1.22 3.2-3.1 3.2-1.4 0-2.4-.68-3.2-1.43l-1.85 3.24c1.44 1.4 3.36 1.98 5.4 1.98zm27.33 0c6.1 0 9.04-3.42 9.04-8.37V10H71.6v11.87c0 2.8-1.6 4.7-4.7 4.7-3.08 0-4.7-1.9-4.7-4.7V10h-4.32v12c0 4.94 2.94 8.36 9.03 8.36zm36.54-.36h-4.92l-3.93-7.1h-3.13V30H87.2V10h9.37c4.17 0 6.75 2.72 6.75 6.44 0 3.5-2.25 5.43-4.4 5.94l4.52 7.62zm-7.47-10.86c1.68 0 2.97-1.02 2.97-2.73 0-1.64-1.3-2.66-2.97-2.66h-4.5v5.4h4.5zM132.47 30h-4.82l-1.26-3.4h-8.6l-1.25 3.4h-4.83l7.7-20h5.35l7.7 20zm-7.25-7.14l-3.12-8.6-3.12 8.6h6.24zM148.65 30V13.74h5.82V10H138.5v3.74h5.86V30h4.3zm32.6 0h-4.82l-1.26-3.4h-8.58l-1.27 3.4h-4.83l7.7-20h5.35l7.7 20zM174 22.86l-3.12-8.6-3.12 8.6H174z"
          />
          <path fill="url(#a)" d="M10 8l8-8v28l-8 8" />
          <path fill="url(#b)" d="M0 27l9 9v-9l-9-9" />
          <path fill="#000" fill-opacity=".15" d="M9 36v-9l-5-5" />
        </g>
      </svg>
    </Wrapper>
  );
}

export default Logo;
