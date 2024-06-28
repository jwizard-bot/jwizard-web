/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import DOMPurify from 'dompurify';
import ReactHtmlParser from 'react-html-parser';

type Props = {
  dangerousText: string;
} & HTMLAttributes<HTMLParagraphElement>;

const PurifiedRenderer = forwardRef<HTMLParagraphElement, Props>(
  ({ dangerousText, ...rest }, ref) => (
    <p ref={ref} {...rest}>
      {ReactHtmlParser(DOMPurify.sanitize(dangerousText))}
    </p>
  )
);

PurifiedRenderer.displayName = 'PurifiedRenderer';

export default PurifiedRenderer;
