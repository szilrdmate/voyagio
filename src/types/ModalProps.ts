// src/types/ModalProps.ts
import { BlogPost } from './BlogPost';

export interface ModalProps {
  post: BlogPost;
  onClose: () => void;
}
