export interface Props {
	setState: SetSignInType;
}

export type SetSignInType = (isSignIn: boolean) => void;