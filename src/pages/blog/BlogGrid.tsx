// src/components/BlogGrid.tsx
import React from "react";
import BlogCard from "./Blogcard";
import { BlogGridProps } from "../../types/BlogGridProps";

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onCardClick }) => {
	return (
		<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
			{posts.map((post) => (
				<BlogCard key={post.id} post={post} onClick={() => onCardClick(post)} />
			))}
		</div>
	);
};

export default BlogGrid;
