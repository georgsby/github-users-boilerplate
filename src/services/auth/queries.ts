import { useMutation } from '@tanstack/react-query';
import { validateUser } from './services';
import { useNavigate } from 'react-router-dom';
import { manageToken } from '@/lib/tokenManagement';

export const useValidateUserMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: validateUser,
    onSuccess: ({ accessToken }) => {
      manageToken(accessToken);
      navigate('/users');
    },
  });
};
