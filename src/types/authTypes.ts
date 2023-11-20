export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
};
