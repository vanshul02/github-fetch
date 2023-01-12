export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  type: string;
  site_admin: boolean;
}

export interface RootRepoObject {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  size: number;
  language: string;
  topics: string[];
}

export interface RootUserObject {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
}
