"use client";
import "./globals.css";
import { useContext } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FooterSection } from "./components/footer";
import { HeaderSection } from "./components/header";
import {
	ThemeProvider,
	useGetTheme,
} from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Steam Theme Portfolio",
	description:
		"Steam theme portfolio generated by create next app",
	icons: "/steam.png",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: RootLayoutProps) {
	return (
		<html
			className="p-2"
			lang="en"
		>
			<ThemeProvider>
				<body id="background">
					<div
						className={`px-4 flex flex-col items-center ${inter.className}`}
					>
						<HeaderSection />
						<div id="content">
							{children}
						</div>
						<FooterSection />
					</div>
				</body>
			</ThemeProvider>
		</html>
	);
}
