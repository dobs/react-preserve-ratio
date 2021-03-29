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

export const SourceLink: React.FC<SourceLinkProps> = ({ name }) => (
  <Link href={`${homepage}/blob/main/example/examples/${name}.tsx`}>
    <ExternalLinkIcon w={4} h={4} color="gray.500" />
  </Link>
);
