// TODO: write your code here
import getLevel from '../basic';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('fetchData должен быть вызван с параметром url + userID', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel должен возвращать строку c уровнем пользователя: Ваш текущий уровень: level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  expect(getLevel()).toBe('Ваш текущий уровень: 5');
});

test('getLevel должен возвращать строку: Информация об уровне временно недоступна', () => {
  fetchData.mockReturnValue({ status: '', level: 5 });
  expect(getLevel()).toBe('Информация об уровне временно недоступна');
});
