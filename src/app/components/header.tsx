'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDropDown, ArrowBack, ArrowForward, Close, Minimize } from "@mui/icons-material";
export function HeaderSection() {
	return (
		<div className="flex justify-between">
			<nav className="flex gap-x-3">
				<ArrowBack/>
				<ArrowForward/>
				<Link href="/store">Store</Link>
				<Link href="/library">Library</Link>
				<Link href="/community">Community</Link>
			</nav>
			<div className="flex gap-x-3">
				<div className="flex bg-lime-700">
					<Image
						src=""
						alt="profile avatar"
						width={32}
						height={32}
					/>
					<p className="text-lime-500">
						Nguyen Thanh An
					</p>
					<ArrowDropDown

					/>
				</div>
				<div className="flex gap-x-3">
					<Minimize/>
					<button>o</button>
					<Close/>
				</div>
			</div>
		</div>
	);
}
