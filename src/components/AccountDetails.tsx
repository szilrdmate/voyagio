import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const AccountDetails: React.FC = () => {
	const { user, handleProfileUpdate, removeProfilePicture } = UserAuth();
	const [newName, setNewName] = useState("");
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			setSelectedFile(file);

			if (user && file instanceof File) {
				await handleProfileUpdate(
					user.uid,
					user.displayName || "", // Provide an empty string if displayName is null
					file
				);
				setSelectedFile(null);
				// Implement any additional logic after profile update (e.g., show a success message)
			}
		}
	};

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewName(event.target.value);
	};

	const handleUpdateName = async () => {
		if (user && newName) {
			await handleProfileUpdate(user.uid, newName, user.photoURL);
			// Implement any additional logic after name update
		}
	};

	const handleRemoveProfilePicture = async () => {
		if (user) {
			await removeProfilePicture(user.uid);
			// Handle post-removal logic (e.g., show success message)
		}
	};

	return (
		<div>
			<h2 className="mb-16 text-5xl font-bold text-gray-800">Account Details</h2>

			<div className="mb-4 flex w-full space-x-8">
				{user?.photoURL ? (
					<div className="overflow-hidden rounded-full border border-gray-300">
						<img src={user?.photoURL} className="h-28 w-28" />
					</div>
				) : (
					<div className="border-gray-30 h-28 w-28 rounded-full border bg-gray-200"></div>
				)}
				<div className="flex flex-col justify-between pt-2">
					<p className="mb-2 text-2xl font-semibold text-gray-800">{user?.displayName ? `Welcome back, ${user.displayName}!` : "Welcome back!"}</p>

					<div className="flex flex-col items-start">
						<input onChange={handleFileChange} id="profilePic" type="file" className="text-sm" />
						<button onClick={handleRemoveProfilePicture} className="px-2 py-1 text-sm text-red-400">
							Remove Profile
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<h4>Name:</h4>
				<div className="flex space-x-2">
					<input value={newName} onChange={handleNameChange} id="displayName" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500 transition-colors duration-150 focus:text-gray-800 focus:outline-none" type="text" />
					<button onClick={handleUpdateName} className="button bg-blue-500 text-white">
						Update Name
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountDetails;
