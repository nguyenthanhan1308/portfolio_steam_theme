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
		textDecorationThickness: "3px!important",
		color:
			currentRouter === router
				? "#1a9fff"
				: "#c6d4df",
		textDecoration:
			currentRouter === router
				? "underline"
				: "",
	});
	return (
		<div id="content">
			<div className="col-start-2 col-span-2 flex justify-between">
				<nav className="flex gap-x-3 uppercase">
					{/* <ArrowBack/>
					<ArrowForward/> */}
					{/* LOGO */}
					<Link
						style={navStyle("/store")}
						href={"/store"}
					>
						Store
					</Link>
					<Link
						style={navStyle(
							"/community"
						)}
						href="/community"
					>
						Community
					</Link>
					<Link
						style={navStyle(
							"/profile"
						)}
						href="/profile"
					>
						Pause Mefo
					</Link>
					<Link
						style={navStyle(
							"/community"
						)}
						href="/community"
					>
						Chat
					</Link>
					<Link
						style={navStyle(
							"/community"
						)}
						href="/community"
					>
						Support
					</Link>
				</nav>
				<div className="flex gap-x-3">
					<div className="flex">
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
						style={{ aspectRatio: 1 }}
					/>
				</div>
			</div>
		</div>
	);
}
