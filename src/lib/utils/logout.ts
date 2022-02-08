import axios from 'axios';

export async function logout(
  thenCallback: () => void,
  catchCallback?: (error: any) => void,
) {
  const confirmed = confirm('정말 로그아웃하시겠습니까?');
  if (confirmed) {
    try {
      await axios.post('/api/logout');
      thenCallback();
    } catch (error) {
      catchCallback && catchCallback(error);
    }
  }
}
