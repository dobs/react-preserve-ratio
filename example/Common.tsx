import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/layout';
import * as React from 'react';
import { homepage } from '../package.json';

export const DefaultExampleContent = ({ children }: { children?: any }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#ddffdd',
      display: 'flex',
      height: '240px',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '320px',
    }}
  >
    {children || 'Hello, world!'}
  </div>
);

export interface SourceLinkProps {
  name: string;
}

export function SourceLink({ name }: SourceLinkProps): JSX.Element {
  return (
    <Link href={`${homepage}/blob/main/example/examples/${name}.tsx`}>
      <ExternalLinkIcon w={4} h={4} color="gray.500" />
    </Link>
  );
}

export const resizableWidth = Math.min(640, window.innerWidth - 32);
export const resizableHeight = 242;
