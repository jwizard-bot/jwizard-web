export const COOKIE_NAME = 'NEXT_LOCALE';

type SliceMap = {
  pattern: RegExp;
  slices: string[];
};

export const ROOT_KEY = 'common';

export const sliceMappings: SliceMap[] = [
  {
    pattern: /^\/$/,
    slices: ['home-page'],
  },
  {
    pattern: /^\/about$/,
    slices: ['about-page'],
  },
  {
    pattern: /^\/commands$/,
    slices: ['commands-page'],
  },
  {
    pattern: /^\/commands.*$/,
    slices: ['command-page'],
  },
  {
    pattern: /^\/error-codes$/,
    slices: ['error-codes-page'],
  },
  {
    pattern: /^\/error-codes.*$/,
    slices: ['error-code-page'],
  },
  {
    pattern: /^\/join$/,
    slices: ['join-page'],
  },
  {
    pattern: /^\/privacy-policy$/,
    slices: ['privacy-policy-page'],
  },
  {
    pattern: /^\/radio-stations$/,
    slices: ['radio-stations-page'],
  },
  {
    pattern: /^\/repos$/,
    slices: ['repos-page'],
  },
  {
    pattern: /^\/status\/audio$/,
    slices: ['status-audio-page'],
  },
  {
    pattern: /^\/status\/bot.*$/,
    slices: ['status-bot-page'],
  },
  {
    pattern: /^\/status\/check.*$/,
    slices: ['status-check-page'],
  },
  {
    pattern: /^\/terms-of-service$/,
    slices: ['terms-of-service-page'],
  },
  {
    pattern: /^\/third-party-software$/,
    slices: ['third-party-software-page'],
  },
];
