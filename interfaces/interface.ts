export interface RootRepoObject {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
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
