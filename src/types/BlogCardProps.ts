import { BlogPost } from './BlogPost';

export interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}
