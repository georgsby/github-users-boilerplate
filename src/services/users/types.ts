export type TUser = {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  following: number;
  company: string;
  blog: string;
  email: string;
};

export type TSearchUser = Pick<TUser, 'id' | 'avatar_url' | 'login'>;

export type TSearchResponse = {
  items: TSearchUser[];
  total_count: number;
};
