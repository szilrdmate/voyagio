import React from "react";
import { ModalProps } from "../../types/ModalProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../../styles/blog.css";

const Modal: React.FC<ModalProps> = ({ post, onClose }) => {
	if (!post) return null;

	return (
		<div className=" fixed inset-0 z-50 grid h-screen w-screen place-content-center overflow-hidden px-4">
			{/* Background overlay */}
			<div className="absolute inset-0 h-full w-full bg-black bg-opacity-40" onClick={onClose}></div>

			{/* Modal content */}
			<div className="no-scrollbar relative z-10 mx-auto h-[80vh] max-w-2xl overflow-x-hidden overflow-y-scroll rounded-3xl border border-gray-300 bg-white text-left shadow-xl">
				<button className="absolute right-4 top-4 text-white" onClick={onClose}>
					<FontAwesomeIcon icon={faX} />
				</button>
				<img className="h-64 w-full object-cover" src={post.image} alt={post.title} />
				<div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
					<h3 className="text-2xl font-bold text-gray-900 underline" id="modal-title">
						{post.title}
					</h3>
					<div className="blog-content mt-2" dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
				<div className="px-4 py-3 sm:flex sm:flex-row-reverse">
					<button className="button mb-2 w-full rounded-xl bg-blue-500 text-white" onClick={onClose}>
						Close Article
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
