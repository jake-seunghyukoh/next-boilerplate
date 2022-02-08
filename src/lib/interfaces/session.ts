export enum RoleEnums {
  ADMIN = 'admin',
  USER = 'user',
}

export interface SessionUserEntity {
  userId: string;
  role: RoleEnums;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  updatedAt: Date;
}
