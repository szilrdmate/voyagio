import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { uploadProfilePicture, deleteProfilePicture } from "../utils/firebaseStorageFunctions";

const AccountDetails: React.FC = () => {
	const { user, updateUser } = UserAuth();
	const [displayName, setDisplayName] = useState(user?.displayName || "");
	const [profilePic, setProfilePic] = useState<File | null>(null);

	const handleNameChange = async () => {
		await updateUser({ displayName });
	};

	const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] as File;
		if (file) {
			setProfilePic(file);
		}
	};

	const handleProfilePicSave = async () => {
		if (profilePic) {
			const url = await uploadProfilePicture(profilePic);
			await updateUser({ photoURL: url });
			setProfilePic(null);
		}
	};

	const extractFilePathFromURL = (url: string) => {
		try {
			const urlObj = new URL(url);
			// Extracting the part after '/o/'
			const basePath = "/o/";
			const startIndex = urlObj.pathname.indexOf(basePath);
			if (startIndex !== -1) {
				const encodedPath = urlObj.pathname.substring(startIndex + basePath.length);
				const decodedPath = decodeURIComponent(encodedPath);
				return decodedPath;
			}
			throw new Error("File path could not be extracted from URL.");
		} catch (error) {
			console.error("Error extracting file path from URL:", error);
			return null;
		}
	};

	const handleRemoveProfilePic = async () => {
		if (user?.photoURL) {
			const filePath = extractFilePathFromURL(user.photoURL);
			console.log("Extracted filePath:", filePath);

			if (filePath) {
				try {
					await deleteProfilePicture(filePath);
					await updateUser({ photoURL: undefined });
				} catch (error) {
					console.error("Error removing profile picture:", error);
				}
			} else {
				console.error("Failed to extract file path.");
			}
		}
	};

	return (
		<div>
			<h2 className="mb-16 text-5xl font-bold text-gray-800">Account Details</h2>
			<div className="mb-4 flex w-full space-x-8">
				{user?.photoURL ? (
					<div className="select-none">
						<img src={user.photoURL} className="h-28 w-28 rounded-full" />
					</div>
				) : (
					<div className="h-28 w-28 rounded-full bg-gray-200"></div>
				)}
				<div className="flex flex-col justify-between pt-2">
					<p className="mb-2 text-2xl font-semibold text-gray-800">{user?.displayName ? `Welcome back, ${user.displayName}!` : "Welcome back!"}</p>
					<input id="profilePic" type="file" onChange={handleProfilePicChange} />
					<div className="space-x-4">
						<button className="text-blue-500" onClick={handleProfilePicSave}>
							Save Profile
						</button>
						<button className="text-red-400" onClick={handleRemoveProfilePic}>
							Remove Profile
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<h4>Name:</h4>
				<div className="flex space-x-2">
					<input id="displayName" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500 transition-colors duration-150 focus:text-gray-800 focus:outline-none" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
					<button className="button bg-blue-500 text-white" onClick={handleNameChange}>
						Update Name
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountDetails;
