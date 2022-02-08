import axios from 'axios';

export interface APIResponseInterface {
  data: any;
  error: any;
}

export async function post(
  url: string,
  data: any,
  headers: any,
): Promise<APIResponseInterface> {
  const response = await axios
    .post(url, data, { headers })
    .catch((err) => err.response);

  if (response?.status !== 201) {
    return {
      data: null,
      error: { status: response?.status, data: response?.data.message },
    };
  }

  return { data: response.data.data, error: null };
}

export async function get(url: string, headers: any) {
  const response = await axios
    .get(url, { headers })
    .catch((err) => err.response);

  if (response?.status !== 200) {
    return {
      data: null,
      error: { status: response?.status, data: response?.data.message },
    };
  }

  return { data: response.data.data, error: null };
}

export async function put(
  url: string,
  data: any,
  headers: any,
): Promise<APIResponseInterface> {
  const response = await axios
    .put(url, data, { headers })
    .catch((err) => err.response);

  if (response?.status !== 200) {
    return {
      data: null,
      error: { status: response?.status, data: response?.data.message },
    };
  }

  return { data: response.data.data, error: null };
}
