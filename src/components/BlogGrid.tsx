// src/components/BlogGrid.tsx
import React from "react";
import BlogCard from "../components/Blogcard";
import { BlogGridProps } from "../types/BlogGridProps";

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onCardClick }) => {
  return (
    <div className='max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onClick={() => onCardClick(post)} />
      ))}
    </div>
  );
};

export default BlogGrid;
