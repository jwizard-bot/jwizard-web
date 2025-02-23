import * as React from 'react';
import { MarkdownRenderer } from '@/markdown';
import { SafetyContainer } from '@jwizard-web/ui/container';

const MarkdownContentSection: React.FC = (): React.ReactElement => (
  <SafetyContainer>
    <MarkdownRenderer file="about-1" />
  </SafetyContainer>
);

export { MarkdownContentSection };
