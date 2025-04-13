export type CsrfResDto = {
  csrfToken: string;
  headerName: string;
};

export type RevalidateResDto = {
  loggedIn: boolean;
  expired: boolean;
};
