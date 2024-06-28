/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { HTMLAttributes, useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Spinner } from '@nextui-org/react';
import Ui from './ui';

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

type MarkdownFile = 'privacy-policy' | 'terms-of-service';

type Props = {
  file: MarkdownFile;
};

const MarkdownRenderer: React.FC<Props> = ({ file }): JSX.Element => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      let markdownRawContent;
      try {
        const { data } = await axios.get(`/md/${i18n.language}/${file}.md`);
        markdownRawContent = data;
      } catch (e) {
        markdownRawContent = '';
      }
      setContent(markdownRawContent);
    };
    fetchMarkdownContent();
  }, [i18n.language]);

  if (!content) {
    return (
      <Ui.FlexContainer justify="center" className="mt-8">
        <Spinner />
      </Ui.FlexContainer>
    );
  }

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={rendererComponents}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
