"use client";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const NavbarLinks = ({
    path,
    text,
    srcImg,
}: {
    path: string;
    srcImg: string;
    text: string;
}) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Fragment>
            <Link
                className={`w-[209px] transition duration-200 rounded-md flex items-center p-[12px] gap-[10px] cursor-pointer
                    ${
                        isActive
                            ? "bg-mainBlue text-white"
                            : "hover:bg-[#e9e9e966]"
                    }
                `}
                href={path}
            >
                <div>
                    <Image width={25} height={25} src={srcImg} alt={text} />
                </div>
                <span className="text-[14px] font-[500]">{text}</span>
            </Link>
        </Fragment>
    );
};
