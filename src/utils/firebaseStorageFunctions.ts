// src/utils/firebaseStorageFunctions.ts
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

export const uploadProfilePicture = async (file: File): Promise<string> => {
  const fileExtension = file.name.split('.').pop();
  const uniqueFileName = `${uuidv4()}.${fileExtension}`; // Unique filename
  const storageRef = ref(storage, `profile_pictures/${uniqueFileName}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const deleteProfilePicture = async (filePath: string) => {
  const storageRef = ref(storage, filePath);
  await deleteObject(storageRef);
};