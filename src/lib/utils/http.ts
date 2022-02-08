export function httpTokenHeader(accessToken: string) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}
