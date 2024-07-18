/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes } from 'react';
import { getLocale } from 'next-intl/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownFile = 'privacy-policy' | 'terms-of-service';

type Props = {
  file: MarkdownFile;
};

const rendererComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-4 font-logo text-3xl" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-default-500 my-4 text-lg" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ms-8 my-2" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="text-default-500 text-lg my-1" {...props} />
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary underline" {...props} />
  ),
};

const MarkdownRenderer: React.FC<Props> = async ({
  file,
}): Promise<JSX.Element> => {
  const language = await getLocale();

  let content = '';
  try {
    content = (await import(`./${language}/${file}.md`)).default;
  } catch (e) {
    content = '';
  }

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={rendererComponents}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
