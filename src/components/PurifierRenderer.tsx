/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import ReactHtmlParser from 'react-html-parser';

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

export default PurifiedRenderer;
