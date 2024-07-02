/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RxExternalLink } from 'react-icons/rx';
import { Avatar, Link, Tooltip } from '@nextui-org/react';
import Ui from '../ui';

type Props = {
  nickname: string;
  profileLink: string;
  profileImageUrl: string;
};

const ContributorProfile: React.FC<Props> = ({
  nickname,
  profileLink,
  profileImageUrl,
}): JSX.Element => (
  <Tooltip
    placement="bottom"
    content={
      <Ui.FlexContainer gap align="center">
        {nickname}
        <Link href={profileLink} isExternal>
          <RxExternalLink />
        </Link>
      </Ui.FlexContainer>
    }>
    <Avatar
      as={Link}
      href={profileLink}
      size="lg"
      color="primary"
      isExternal
      isBordered
      name={nickname}
      src={profileImageUrl}
      className="text-lg"
    />
  </Tooltip>
);

export default ContributorProfile;
