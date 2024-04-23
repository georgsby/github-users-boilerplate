import { axiosInstance } from '@/api';
import { TUser, TSearchResponse } from '@/services/users/types';
import { USERS_ENDPOINTS } from '@/constants/users';

const PER_PAGE = 10;

export const getUsers = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: [string, string];
}): Promise<TSearchResponse> => {
  // eslint-disable-next-line
  const [_, searchQuery] = queryKey;

  if (!searchQuery) {
    return {
      items: [],
      total_count: 0,
    };
  }

  const response = await axiosInstance.get(
    `${USERS_ENDPOINTS.SEARCH}?q=${searchQuery}&page=${pageParam}&per_page=${PER_PAGE}`,
  );

  return response.data;
};

export const getUser = async (username: TUser['login']): Promise<TUser> => {
  const response = await axiosInstance.get(`${USERS_ENDPOINTS.GET_USER}${username}`);
  return response.data;
};
