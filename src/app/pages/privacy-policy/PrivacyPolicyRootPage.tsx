/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { MarkdownRenderer } from '@/components';
import Ui from '@/components/ui';

const PrivacyPolicyRootPage: React.FC = (): JSX.Element => (
  <Ui.SafetyContainer as="main" className="sm:mt-8 sm:mb-32">
    <Ui.ContentHeader i18nText="privacyPolicy" size="md" />
    <MarkdownRenderer file="privacy-policy" />
  </Ui.SafetyContainer>
);

export default PrivacyPolicyRootPage;
