import { httpTokenHeader } from '@utils/http';
import axios from 'axios';

interface SecuredRequest {
  url: string;
  token: string;
}

export async function swrFetcher({ url, token }: SecuredRequest) {
  const response = await axios.get(url, {
    headers: httpTokenHeader(token),
  });

  return response.data.data;
}
