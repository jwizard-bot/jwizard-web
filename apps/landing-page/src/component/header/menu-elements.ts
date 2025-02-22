type MenuElement = {
  triggerI18nKey: string;
  elements: {
    link: string;
    insideRouter?: boolean;
    i18nKey: string;
  }[];
};

const menuElements: MenuElement[] = [
  {
    triggerI18nKey: 'gettingStarted',
    elements: [
      {
        link: '/about',
        i18nKey: 'about',
      },
      {
        link: '/repos',
        i18nKey: 'githubRepositories',
      },
      {
        link: '/status/bot',
        i18nKey: 'servicesStatus',
      },
      {
        link: '/status/audio',
        i18nKey: 'audioStatus',
      },
      {
        link: '/status/check',
        i18nKey: 'checkServiceAvailability',
      },
      {
        link: '/third-party-software',
        i18nKey: 'thirdPartySoftware',
      },
    ],
  },
  {
    triggerI18nKey: 'features',
    elements: [
      {
        link: '/commands',
        i18nKey: 'commands',
      },
      {
        link: '/radio-stations',
        i18nKey: 'radioStations',
      },
      {
        link: '/error-codes',
        i18nKey: 'errorCodes',
      },
    ],
  },
];

export { menuElements };
