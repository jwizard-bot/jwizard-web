/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { GoArrowLeft } from 'react-icons/go';
import { Link as ReactLink } from 'react-router-dom';
import Ui from '@/components/ui';
import { Button } from '@nextui-org/react';

const NotFoundPage: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Ui.SafetyContainer>
      <Ui.FlexContainer col centerContent className="my-48">
        <Ui.ContentHeader size="xl" className="sm:mb-4">
          404
        </Ui.ContentHeader>
        <Ui.Paragraph i18nText="notFound" className="mb-4" />
        <Button
          as={ReactLink}
          to="/"
          size="md"
          color="primary"
          startContent={<GoArrowLeft />}
          className="text-lg sm:text-xl w-full sm:w-fit">
          {t('returnToHome')}
        </Button>
      </Ui.FlexContainer>
    </Ui.SafetyContainer>
  );
};

export default NotFoundPage;
