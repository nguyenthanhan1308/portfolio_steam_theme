"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	ArrowDropDown,
	Notifications,
} from "@mui/icons-material";
export function HeaderSection() {
	const currentRouter = usePathname();

	const navStyle = (router: string) => ({
		fontWeight: 500,
		textUnderlinePosition: "under",
		textDecorationThickness: "3px",
		color:
			currentRouter === router
				? "#1a9fff"
				: "#c6d4df",
		textDecorationLine:
			currentRouter === router
				? "underline"
				: "",
	});

	const imgStyle = {
		aspectRatio: 1,
		background:
			"linear-gradient( to bottom, #515151 5%, #474747 95%)",
		padding: 2,
	};

	const navLinkList: string[] = [
		"store",
		"community",
		"profile",
		"chat",
		"support",
	];

	return (
		<div
			style={{ background: "#171d25" }}
			className="flex justify-center w-screen"
		>
			<div
				id="content"
				className="col-start-2 col-span-2 flex justify-between items-center"
			>
				<nav className="flex gap-x-3 uppercase">
					{navLinkList.map((link) => {
						return (
							<Link
								key={link}
								style={navStyle(
									`/${link}`
								)}
								href={link}
							>
								{link}
							</Link>
						);
					})}
				</nav>
				<div className="flex gap-x-3">
					<div className="flex text-xs gap-x-3 items-center">
						<div
							style={{
								width: 46,
								height: 24,
							}}
							className="bg-lime-700 flex justify-center"
						>
							<Notifications
								style={{
									width: 16,
								}}
							/>
						</div>
						<p>Nguyen Thanh An</p>
						<ArrowDropDown />
					</div>
					<Image
						src="https://preview.redd.it/3ndn9ft88z5c1.png?width=320&crop=smart&auto=webp&s=2a47ceb323a29c0d3c7d115bf7dedb3e16a09267"
						alt="profile avatar"
						width={34}
						height={34}
						style={imgStyle}
					/>
				</div>
			</div>
		</div>
	);
}
