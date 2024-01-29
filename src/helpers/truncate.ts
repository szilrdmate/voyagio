export const trimStringToCharLimit = (inputString: string, limit: number): string => {
	if (inputString.length > limit) {
		return inputString.substring(0, limit) + "...";
	}
	return inputString;
};