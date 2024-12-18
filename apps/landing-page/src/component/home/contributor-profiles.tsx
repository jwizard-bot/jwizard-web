'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useMemo } from 'react';
import { ContributorData, ContributorsDataResDto } from '@/query/type';
import { ContentSpinner } from '@jwizard-web/ui/component/content-spinner';
import { FlexContainer } from '@jwizard-web/ui/container';
import { useMounted } from '@jwizard-web/ui/hook/use-mounted';
import { Avatar, AvatarFallback, AvatarImage } from '@jwizard-web/ui/widget/avatar';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@jwizard-web/ui/widget/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';

type Props = {
  data: ContributorsDataResDto;
};

const ContributorProfiles: React.FC<Props> = ({ data }): React.ReactElement => {
  const mounted = useMounted();

  const sortedVariants = useMemo(
    () => Object.entries(data.variants).sort((a, b) => a[1].position - b[1].position),
    [data]
  );

  const memoizedContributors = useMemo(
    () =>
      sortedVariants.reduce(
        (contributors, [variant]) => {
          contributors[variant] = data.contributors.filter(contributor =>
            contributor.variants.includes(variant)
          );
          return contributors;
        },
        {} as Record<string, ContributorData[]>
      ),
    [data, sortedVariants]
  );

  if (!mounted) {
    return <ContentSpinner />;
  }

  return (
    <FlexContainer col fullWidth align="center" className="mt-16">
      <Tabs defaultValue={data.initVariant} orientation="vertical">
        <TabsList>
          {sortedVariants.map(([variant, details]) => (
            <TabsTrigger key={variant} value={variant}>
              {details.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(memoizedContributors).map(([variant, contributors]) => (
          <TabsContent key={variant} value={variant}>
            {contributors.map(({ nickname, profileLink, profileImageUrl }) => (
              <FlexContainer key={nickname} justify="center" className="mt-5">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <OuterLink to={profileLink}>
                        <Avatar hasRing>
                          <AvatarImage src={profileImageUrl} />
                          <AvatarFallback>{nickname.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      </OuterLink>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{nickname}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FlexContainer>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </FlexContainer>
  );
};

export { ContributorProfiles };
