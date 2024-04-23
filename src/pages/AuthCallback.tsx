import { useValidateUserMutation } from '@/services/auth/queries';
import React from 'react';

function AuthCallback() {
  const { mutate } = useValidateUserMutation();
  React.useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (!code) {
      throw new Error('No code found');
    }
    mutate(code);
  }, [mutate]);
  return <div></div>;
}

export default AuthCallback;
