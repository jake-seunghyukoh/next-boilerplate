import { SessionUserEntity } from '@interfaces/session';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export function useUser() {
  const { data, error } = useSWR('/api/user', fetcher);

  return {
    user: data?.user as SessionUserEntity,
    isLoading: !error && !data,
    isError: !!error,
  };
}
