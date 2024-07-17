/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Ui from '../ui';

const KeyFeaturesSection: React.FC = (): JSX.Element => {
  return (
    <Ui.SafetyContainer className="mb-16 sm:mb-32">
      <Ui.ContentHeader headingVariant="h2" i18nText="keyFeatures" />
      <Ui.GridContainer gap={6} responsive>
        CARDS
      </Ui.GridContainer>
    </Ui.SafetyContainer>
  );
};

export default KeyFeaturesSection;
