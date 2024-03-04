"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowDropDown, Notifications } from "@mui/icons-material";
export function HeaderSection() {
	const currentRouter = usePathname();

	const navStyle = (router: string) => ({
		fontWeight: 500,
		textUnderlinePosition: "under",
		textDecorationThickness: "3px",
		color: currentRouter === router ? "#1a9fff" : "#c6d4df",
		textDecorationLine: currentRouter === router ? "underline" : "",
	});

	const imgStyle = (status: string) => ({
		aspectRatio: 1,
		background: status === "online" ? "linear-gradient( to bottom, #41778f 5%, #3d697b 95%)" :"linear-gradient( to bottom, #515151 5%, #474747 95%)",
		padding: 2,
		height: 34,
		width: 34,
	});

	const headerStyle = {
		minWidth: "940px",
		height: "104px",
		position: "relative" as "relative",
	};

	const headerActionStyle = {
		height: 21,
		position: "absolute" as "absolute",
		right: 8,
		top: 8,
	};

	const navLinkList: string[] = ["store", "community", "profile", "chat", "support"];

	return (
		<div
			style={{ background: "#171d25" }}
			className="flex justify-center w-screen"
		>
			<div
				style={headerStyle}
				className="col-start-2 col-span-2 flex justify-between"
			>
				<nav className="flex gap-x-3 uppercase items-center">
					{navLinkList.map(link => {
						return (
							<Link
								key={link}
								style={navStyle(`/${link}`)}
								href={link}
							>
								{link}
							</Link>
						);
					})}
				</nav>
				<div
					style={headerActionStyle}
					className={`flex gap-x-3`}
				>
					<div className="flex text-xs gap-x-3 items-center">
						<a target="_blank" href="resume.pdf">
							<div
								style={{
									padding: 8,
									height: 24,
									background: "rgba(103,112,123,.2)",
								}}
								onClick={
									() => {

									}
								}
								className="flex justify-center items-center"
							>
								Download my CV
							</div>
						</a>
						<div
							style={{
								width: 46,
								height: 24,
								background: "rgba(103,112,123,.2)",
							}}
							className="flex justify-center"
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
				</div>
				<Image
					src="https://preview.redd.it/3ndn9ft88z5c1.png?width=320&crop=smart&auto=webp&s=2a47ceb323a29c0d3c7d115bf7dedb3e16a09267"
					alt="profile avatar"
					width={34}
					height={34}
					style={imgStyle("online")}
				/>
			</div>
		</div>
	);
}
