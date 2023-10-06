import React from 'react';
import { render } from '@testing-library/react';
import Youtube from './index'; 

test('Youtube component renders with the correct video URL', () => {
  const { container } = render(<Youtube />);
  const iframeElement = container.querySelector('iframe');
  expect(iframeElement).toBeDefined();
  
 
  const srcAttribute = iframeElement.getAttribute('src');
  expect(srcAttribute).toBe('https://www.youtube.com/embed/TswL6KhQDn4?si=QN0FL-9fFG6cgebs');
});

test('Youtube component renders an iframe element', () => {
  const { container } = render(<Youtube />);
  const iframeElement = container.querySelector('iframe');
  expect(iframeElement).toBeDefined();
});
