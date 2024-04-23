import { useEffect } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getUser, getUsers } from './services';
import { useDebounce } from '@uidotdev/usehooks';
import { TSearchResponse, TUser } from './types';
import { useUsersStore } from '@/store/users';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export const useGerUsersQuery = ({ searchQuery }: { searchQuery: string }) => {
  const search = useDebounce(searchQuery, 300);
  return useInfiniteQuery<TSearchResponse, Error>({
    queryKey: ['users', search],
    queryFn: ({ pageParam, queryKey }) =>
      getUsers({ pageParam: pageParam as number, queryKey: queryKey as [string, string] }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const nextPage = lastPage?.items?.length < lastPage?.total_count;
      return nextPage ? (lastPageParam as number) + 1 : null;
    },
  });
};

export const useGerUserQuery = (username: TUser['login']) => {
  const setUser = useUsersStore((state) => state.actions.setUser);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data, isLoading, isError } = useQuery<TUser, Error>({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
  });

  useEffect(() => {
    if (isError) {
      toast({
        variant: 'destructive',
        title: "This user doesn't exist!",
      });
      navigate('/users');
    }
  }, [isError]);

  // There is a way to use data directly, but let's use zustand store for this case
  useEffect(() => {
    if (data) {
      const payload = {
        id: data.id,
        avatar_url: data.avatar_url,
        login: data.login,
        name: data.name,
        followers: data.followers,
        following: data.following,
        company: data.company,
        blog: data.blog,
        email: data.email,
      };
      setUser(payload);
    }
  }, [data, setUser]);

  return { isLoading };
};
