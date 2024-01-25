import { User } from "firebase/auth";

export type AccountSection = "history" | "help" | "details" | "bug" | "subscription";

export type Link = {
	title: string;
	state: AccountSection;
	icon: JSX.Element;
};

export type SidebarProps = {
	links: Link[];
	setAccountSection: (section: AccountSection) => void;
	user: User | null;
	logout: () => void;
};