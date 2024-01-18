// src/components/BlogPage.tsx
import React, { useState } from "react";
import BlogGrid from "../components/BlogGrid";
import Modal from "../components/Modal";
import postData from "../data/blog.json";
import { BlogPost } from "../types/BlogPost";
import Footer from "../components/Footer";

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sortedPosts = [...(postData as BlogPost[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleCardClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='w-full py-40 bg-gradient-to-b from-blue-700 via-blue-500 to-white'>
        <BlogGrid posts={sortedPosts} onCardClick={handleCardClick} />
        {isModalOpen && selectedPost && (
          <Modal post={selectedPost} onClose={handleCloseModal} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
