import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useGerUsersQuery } from '@/services/users/queries';
import { useInView } from 'react-intersection-observer';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { TSearchUser, TUser } from '@/services/users/types';

function Users() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState<string>('');
  const { data, fetchNextPage, hasNextPage } = useGerUsersQuery({ searchQuery: search });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const handleClick = (username: TUser['login']): void => {
    navigate(`/profile/${username}`);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center bg-background">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="rounded-3xl">
              Search users
            </Button>
          </DialogTrigger>
          <DialogContent className="!sm:max-w-[300px] p-0">
            <div>
              <div className="flex h-[48px] items-center border-b px-3">
                <CiSearch size={20} width={30} height={30} />
                <Input
                  className=" ml-2 border-0 px-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
              </div>

              <div className="h-[300px] overflow-y-auto">
                {(data?.pages?.[0]?.items?.length === 0 || search.length === 0) && (
                  <div className="m-auto flex h-full w-max items-center text-white/65">There is no data</div>
                )}

                {data?.pages?.map((page) => {
                  return page?.items?.map((user: TSearchUser) => (
                    <div
                      key={user.id}
                      className="flex cursor-pointer items-center px-3 py-4 hover:bg-white/10"
                      onClick={() => handleClick(user.login)}
                    >
                      <img src={user.avatar_url} width={40} height={40} alt="avatar" className="mr-3 rounded-full" />
                      {user.login}
                    </div>
                  ));
                })}
                {!!search && hasNextPage && (
                  <div ref={ref} className="flex cursor-pointer items-center px-3 py-4 hover:bg-white/10">
                    <Skeleton className="mr-3 h-[40px] min-w-[40px] rounded-full" />
                    <Skeleton className="h-[20px] w-full" />
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Users;
