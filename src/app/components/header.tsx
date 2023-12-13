'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDropDown, Notifications } from "@mui/icons-material";
export function HeaderSection() {
	return (
		<div className="flex justify-between" >
			<nav className="flex gap-x-3 uppercase">
				{/* <ArrowBack/>
				<ArrowForward/> */}
				{/* LOGO */}
				<Link href="/store">Store</Link>
				<Link href="/community">Community</Link>
				<Link href="/community">Pause Mefo</Link>
				<Link href="/community">Chat</Link>
				<Link href="/community">Support</Link>
			</nav>
			<div className="flex gap-x-3">
				<div className="flex">
					<div style={{width: 46, height: 24}} className="bg-lime-700 flex justify-center">
						<Notifications style={{width: 16}}/>
					</div>
					<p>
						Nguyen Thanh An
					</p>
					<ArrowDropDown

					/>
				</div>
				<Image
					src="https://preview.redd.it/3ndn9ft88z5c1.png?width=320&crop=smart&auto=webp&s=2a47ceb323a29c0d3c7d115bf7dedb3e16a09267"
					alt="profile avatar"
					width={34}
					height={34}
					style={{aspectRatio: 1}}
				/>
			</div>
		</div>
	);
}
