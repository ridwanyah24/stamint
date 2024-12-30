'use client'
import Image from "next/image"
import Link from "next/link"
import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from "./navigation-menu"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import { spaceBold } from "@/app/utils/fontFamilies"
import { Dialog, DialogContent } from "./dialog"
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"



export const Nav = ()=>{
    const pathname = usePathname(); 
    const [darkMode, setDarkMode] = useState ("dark")
    return(
        <>
            <nav className="flex justify-between items-center relative max-w-[1700px] mx-auto px-5 max-md:px-4 py-3" style={{fontFamily:spaceBold.style.fontFamily}}>
                <div className="flex items-center gap-20 max-md:gap-10 h-full">
                    <Link href={"/"}>
                        <Image src={"/StaMint.png"} height={50} width={105} className="" alt={"Stamint logo"} sizes="100vw"/>
                    </Link>
                    <div className="flex items-center gap-10 max-md:gap-5 mt-2 font-semibold">
                        <Link
                            href="/dashboard"
                            className={` ${
                                pathname === "/dashboard"
                                ? "text-[#104BFF]"
                                : " hover:text-[#05145A]"
                            }`}
                            >
                            Dashboard
                        </Link>
                        <Link
                            href="/createCoin"
                            className={`text-base ${
                            pathname === "/courseList"
                        ? "text-[#05145A]"
                        : " hover:text-[#05145A]"
                            }`}
                        >
                            Create Coin
                        </Link>
                        <Link
                            href="/myCoins"
                            className={`text-base ${
                            pathname === "/courseList"
                        ? "text-[#104BFF]"
                        : " hover:text-[#05145A]"
                            }`}
                        >
                            My Coins
                        </Link>
                        <Link
                            href="/sell"
                            className={`text-base ${
                            pathname === "/courseList"
                        ? "text-[#05145A]"
                        : " hover:text-[#05145A]"
                            }`}
                        >
                            Sell
                        </Link>
                        <Link
                            href="/mint"
                            className={`text-base ${
                            pathname === "/courseList"
                        ? "text-[#05145A]"
                        : "hover:text-[#05145A]"
                            }`}
                        >
                            Mint
                        </Link>
                    </div>
                </div>
                <div className="flex gap-10 items-center mt-5">
                    {
                        darkMode === "dark" ? <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[48px] w-[48px]">
                        <circle cx="24.4966" cy="24" r="23.5" stroke="white" opacity="0.5"/>
                        <path d="M24.8112 24.4536C29.4779 32.5366 38.2454 30.169 32.6653 33.3906C27.0852 36.6123 19.95 34.7004 16.7283 29.1203C13.5067 23.5402 15.4185 16.405 20.9986 13.1834C26.5787 9.96169 20.1446 16.3707 24.8112 24.4536Z" stroke="white" stroke-width="1.5"/>
                        </svg>
                        : 
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="23.5" stroke="#1C1C1C" opacity="0.5"/>
                        <g clip-path="url(#clip0_42_125)">
                        <path d="M24 11.1667V13.5M24 34.5V36.8333M36.8333 24H34.5M13.5 24H11.1666M33.0745 14.9255L31.4246 16.5754M16.5753 31.4246L14.9254 33.0745M33.0745 33.0745L31.4246 31.4246M16.5753 16.5754L14.9254 14.9255M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_42_125">
                        <rect width="28" height="28" fill="white" transform="translate(10 10)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    }
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"default"} className="h-[48px] min-w-[200px] flex gap-3"> 
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <svg width="25" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
                                    <circle cx="12.4966" cy="12" r="12" fill="#1C1C1C"/>
                                    <path d="M8.30908 8.0625C8.30908 7.73098 8.44078 7.41304 8.6752 7.17862C8.90962 6.9442 9.22756 6.8125 9.55908 6.8125H16.7022C16.7435 6.8125 16.7647 6.8125 16.7816 6.81437C16.8518 6.82242 16.9173 6.85406 16.9673 6.90413C17.0172 6.95419 17.0487 7.01972 17.0566 7.09C17.0591 7.11638 17.0599 7.14289 17.0591 7.16938C17.0591 7.41813 17.0591 7.5425 17.0472 7.6475C16.9996 8.06955 16.8102 8.46293 16.5098 8.76326C16.2095 9.06358 15.8161 9.25304 15.3941 9.30062C15.2891 9.3125 15.1647 9.3125 14.916 9.3125H14.8716M8.30908 8.0625C8.30908 8.39402 8.44078 8.71196 8.6752 8.94638C8.90962 9.1808 9.22756 9.3125 9.55908 9.3125H16.4341C17.0235 9.3125 17.3178 9.3125 17.501 9.49563C17.6841 9.67875 17.6841 9.97312 17.6841 10.5625V11.8125M8.30908 8.0625V13.6875C8.30908 14.8663 8.30908 15.455 8.67533 15.8212C9.04158 16.1875 9.63033 16.1875 10.8091 16.1875H16.4341C17.0235 16.1875 17.3178 16.1875 17.501 16.0044C17.6841 15.8213 17.6841 15.5269 17.6841 14.9375V14.3125M17.6841 11.8125H16.4341C15.8447 11.8125 15.5503 11.8125 15.3672 11.9956C15.1841 12.1788 15.1841 12.4731 15.1841 13.0625C15.1841 13.6519 15.1841 13.9463 15.3672 14.1294C15.5503 14.3125 15.8447 14.3125 16.4341 14.3125H17.6841M17.6841 11.8125V14.3125" stroke="white"/>
                                </svg>
                                FbnT...J7Mw
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <ProfileModal />
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>
        </>
    )
}

const ProfileModal = ()=> {
    return (
        <div>
            <DialogTitle>Jacskon</DialogTitle>
        </div>
    )
}

