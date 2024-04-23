import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosLink } from 'react-icons/io';
import { IoArrowBackSharp } from 'react-icons/io5';
import { formatAmount } from '@/lib/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { useGerUserQuery } from '@/services/users/queries';
import Loader from '@/components/ui/loader';
import { useUsersStore } from '@/store/users';
import { Button } from '@/components/ui/button';

function Profile() {
  const navigate = useNavigate();
  const { username } = useParams<string>();
  const { user } = useUsersStore();
  const { isLoading } = useGerUserQuery(username as string);

  const handleGoBack = () => navigate(-1);

  if (isLoading) return <Loader overlay />;

  return (
    <div className="flex min-h-full items-center justify-center bg-background">
      <Button variant="link" className="absolute left-5 top-5 flex items-center gap-x-2" onClick={handleGoBack}>
        <IoArrowBackSharp />
        Go back
      </Button>
      <div className="flex w-[320px] flex-col rounded-3xl border px-8 py-5">
        <img src={user?.avatar_url} className="mx-auto mb-4 w-full rounded-full" alt="" />
        {user?.name && <div className="text-lg font-bold text-white">{user.name}</div>}
        <div className="text-md text-white/75">{user?.login}</div>
        <div className="text-md flex items-center text-white/75">
          <FaUsers /> <span className="mx-1 text-white">{formatAmount(user?.followers as number)}</span> followers ·{' '}
          <span className="mx-1 text-white">{user?.following}</span> following
        </div>
        {user?.company && (
          <div className="text-md flex items-center gap-x-2 text-white/75">
            <FaBuilding /> {user.company}
          </div>
        )}
        {user?.email && (
          <div className="text-md flex items-center gap-x-2 text-white/75">
            <MdEmail /> {user.email}
          </div>
        )}
        {user?.blog && (
          <div className="text-md flex items-center gap-x-2 text-white/75">
            <IoIosLink />
            <a target="_blank" href={user.blog}>
              {user.blog}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
