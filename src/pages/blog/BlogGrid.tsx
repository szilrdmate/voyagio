import React, { Suspense } from "react";
import BlogCard from "./Blogcard";
import { BlogGridProps } from "../../types/BlogGridProps";

const BlogSkeletonCard = () => {
	return (
		<div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg sm:h-[400px] md:h-[400px]">
			<div className="h-64 w-full animate-pulse bg-gray-100 text-gray-100">image</div>
			<div className="ml-4 mt-4 h-8 w-48 animate-pulse rounded-2xl bg-gray-100 text-gray-100">title</div>
		</div>
	);
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onCardClick }) => {
	return (
		<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
			<Suspense fallback={<BlogSkeletonCard />}>
				{posts.map((post) => (
					<BlogCard key={post.id} post={post} onClick={() => onCardClick(post)} />
				))}
			</Suspense>
			<BlogSkeletonCard />
		</div>
	);
};

export default BlogGrid;
