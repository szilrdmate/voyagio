import React, { useState } from "react";
import BlogGrid from "./BlogGrid";
import Modal from "./Modal";
import postData from "../../data/blog.json";
import { BlogPost } from "../../types/BlogPost";
import Footer from "../../components/ui/Footer";

const Blog: React.FC = () => {
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const sortedPosts = [...(postData as BlogPost[])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const handleCardClick = (post: BlogPost) => {
		setSelectedPost(post);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="no-scrollbar w-full bg-gradient-to-b from-blue-700 via-blue-500 to-white py-40">
				<h1 className="mx-auto mb-6 max-w-6xl px-6 text-4xl font-bold text-gray-800 sm:mb-16 sm:text-6xl">Our Latest Posts</h1>
				<BlogGrid posts={sortedPosts} onCardClick={handleCardClick} />
				{isModalOpen && selectedPost && <Modal post={selectedPost} onClose={handleCloseModal} />}
			</div>
			<Footer />
		</>
	);
};

export default Blog;
