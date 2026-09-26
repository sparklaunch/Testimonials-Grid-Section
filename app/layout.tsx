import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
	weight: ["500", "600"]
});

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={barlowSemiCondensed.className}>
			<body>{children}</body>
		</html>
	);
}
