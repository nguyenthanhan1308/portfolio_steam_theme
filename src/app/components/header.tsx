import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeaderSection() {
	return (
		<div className="flex justify-between">
			<div className="flex gap-x-3">
				<Link href="/store">Store</Link>
				<Link href="/library">Library</Link>
				<Link href="/community">Community</Link>
			</div>
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
				</div>
				<div className="flex gap-x-3">
					<button>_</button>
					<button>o</button>
					<button>x</button>
				</div>
			</div>
		</div>
	);
}
