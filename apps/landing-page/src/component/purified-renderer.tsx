import * as React from 'react';
import { HTMLAttributes, forwardRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'isomorphic-dompurify';

type Props = {
  dangerousText: string;
  Component?: React.ElementType;
} & HTMLAttributes<HTMLParagraphElement>;

const PurifiedRenderer = forwardRef<HTMLParagraphElement, Props>(
  ({ dangerousText, Component = 'p', ...rest }, ref) => (
    <Component ref={ref} {...rest}>
      {ReactHtmlParser(DOMPurify.sanitize(dangerousText))}
    </Component>
  )
);

PurifiedRenderer.displayName = 'PurifiedRenderer';

export { PurifiedRenderer };
