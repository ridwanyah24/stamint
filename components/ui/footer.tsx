import Link from "next/link"
import Image from "next/image"
import { spaceBold, spaceLight } from "@/app/utils/fontFamilies"

export const Footer = () => {
    return (
        <>
        <div className="flex pt-8 pl-16 pr-16 pb-8 gap-20 mt-20 justify-between">
            <div className="flex flex-col gap-5">
                <Link href={"/"}>
                    <Image src={"/StaMint.png"} height={50} width={105} className="" alt={"Stamint logo"} sizes="100vw"/>
                </Link>
                <p className="text-[16px] max-w-[250px]">Your Gateway to Personalized Stablecoins & Yield Opportunities</p>
                <div className="flex-grow flex mt-10 gap-10">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7701 5.83C18.4401 5.21 17.0001 4.76 15.5001 4.5C15.4737 4.50038 15.4486 4.51116 15.4301 4.53C15.2501 4.86 15.0401 5.29 14.9001 5.62C13.3091 5.38015 11.6911 5.38015 10.1001 5.62C9.96012 5.28 9.75012 4.86 9.56012 4.53C9.55012 4.51 9.52012 4.5 9.49012 4.5C7.99012 4.76 6.56012 5.21 5.22012 5.83C5.21012 5.83 5.20012 5.84 5.19012 5.85C2.47012 9.92 1.72012 13.88 2.09012 17.8C2.09012 17.82 2.10012 17.84 2.12012 17.85C3.92012 19.17 5.65012 19.97 7.36012 20.5C7.39012 20.51 7.42012 20.5 7.43012 20.48C7.83012 19.93 8.19012 19.35 8.50012 18.74C8.52012 18.7 8.50012 18.66 8.46012 18.65C7.89012 18.43 7.35012 18.17 6.82012 17.87C6.78012 17.85 6.78012 17.79 6.81012 17.76C6.92012 17.68 7.03012 17.59 7.14012 17.51C7.16012 17.49 7.19012 17.49 7.21012 17.5C10.6501 19.07 14.3601 19.07 17.7601 17.5C17.7801 17.49 17.8101 17.49 17.8301 17.51C17.9401 17.6 18.0501 17.68 18.1601 17.77C18.2001 17.8 18.2001 17.86 18.1501 17.88C17.6301 18.19 17.0801 18.44 16.5101 18.66C16.4701 18.67 16.4601 18.72 16.4701 18.75C16.7901 19.36 17.1501 19.94 17.5401 20.49C17.5701 20.5 17.6001 20.51 17.6301 20.5C19.3501 19.97 21.0801 19.17 22.8801 17.85C22.9001 17.84 22.9101 17.82 22.9101 17.8C23.3501 13.27 22.1801 9.34 19.8101 5.85C19.8001 5.84 19.7901 5.83 19.7701 5.83ZM9.02012 15.41C7.99012 15.41 7.13012 14.46 7.13012 13.29C7.13012 12.12 7.97012 11.17 9.02012 11.17C10.0801 11.17 10.9201 12.13 10.9101 13.29C10.9101 14.46 10.0701 15.41 9.02012 15.41ZM15.9901 15.41C14.9601 15.41 14.1001 14.46 14.1001 13.29C14.1001 12.12 14.9401 11.17 15.9901 11.17C17.0501 11.17 17.8901 12.13 17.8801 13.29C17.8801 14.46 17.0501 15.41 15.9901 15.41Z" fill="white"/>
                    </svg>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_46_602" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
                        <path d="M2.5 2.49994H22.5V22.4999H2.5V2.49994Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_46_602)">
                        <path d="M18.25 3.43713H21.3171L14.6171 11.1143L22.5 21.5628H16.3286L11.4914 15.2271L5.96286 21.5628H2.89286L10.0586 13.3486L2.5 3.43856H8.82857L13.1943 9.22856L18.25 3.43713ZM17.1714 19.7228H18.8714L7.9 5.18142H6.07714L17.1714 19.7228Z" fill="white"/>
                        </g>
                    </svg>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 2.5C11.1868 2.5 9.88642 2.75866 8.67317 3.2612C7.45991 3.76375 6.35752 4.50035 5.42893 5.42893C3.55357 7.3043 2.5 9.84784 2.5 12.5C2.5 16.92 5.37 20.67 9.34 22C9.84 22.08 10 21.77 10 21.5V19.81C7.23 20.41 6.64 18.47 6.64 18.47C6.18 17.31 5.53 17 5.53 17C4.62 16.38 5.6 16.4 5.6 16.4C6.6 16.47 7.13 17.43 7.13 17.43C8 18.95 9.47 18.5 10.04 18.26C10.13 17.61 10.39 17.17 10.67 16.92C8.45 16.67 6.12 15.81 6.12 12C6.12 10.89 6.5 10 7.15 9.29C7.05 9.04 6.7 8 7.25 6.65C7.25 6.65 8.09 6.38 10 7.67C10.79 7.45 11.65 7.34 12.5 7.34C13.35 7.34 14.21 7.45 15 7.67C16.91 6.38 17.75 6.65 17.75 6.65C18.3 8 17.95 9.04 17.85 9.29C18.5 10 18.88 10.89 18.88 12C18.88 15.82 16.54 16.66 14.31 16.91C14.67 17.22 15 17.83 15 18.76V21.5C15 21.77 15.16 22.09 15.67 22C19.64 20.66 22.5 16.92 22.5 12.5C22.5 11.1868 22.2413 9.88642 21.7388 8.67317C21.2362 7.45991 20.4997 6.35752 19.5711 5.42893C18.6425 4.50035 17.5401 3.76375 16.3268 3.2612C15.1136 2.75866 13.8132 2.5 12.5 2.5Z" fill="white"/>
                    </svg>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 2.5C6.98 2.5 2.5 6.98 2.5 12.5C2.5 18.02 6.98 22.5 12.5 22.5C18.02 22.5 22.5 18.02 22.5 12.5C22.5 6.98 18.02 2.5 12.5 2.5ZM17.14 9.3C16.99 10.88 16.34 14.72 16.01 16.49C15.87 17.24 15.59 17.49 15.33 17.52C14.75 17.57 14.31 17.14 13.75 16.77C12.87 16.19 12.37 15.83 11.52 15.27C10.53 14.62 11.17 14.26 11.74 13.68C11.89 13.53 14.45 11.2 14.5 10.99C14.5069 10.9582 14.506 10.9252 14.4973 10.8938C14.4886 10.8624 14.4724 10.8337 14.45 10.81C14.39 10.76 14.31 10.78 14.24 10.79C14.15 10.81 12.75 11.74 10.02 13.58C9.62 13.85 9.26 13.99 8.94 13.98C8.58 13.97 7.9 13.78 7.39 13.61C6.76 13.41 6.27 13.3 6.31 12.95C6.33 12.77 6.58 12.59 7.05 12.4C9.97 11.13 11.91 10.29 12.88 9.89C15.66 8.73 16.23 8.53 16.61 8.53C16.69 8.53 16.88 8.55 17 8.65C17.1 8.73 17.13 8.84 17.14 8.92C17.13 8.98 17.15 9.16 17.14 9.3Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="flex flex-col gap-5 capitalize" style={{fontFamily:spaceLight.style.fontFamily}}>
                <p className="font-bold" style={{fontFamily:spaceBold.style.fontFamily}}>Quick Links</p>
                <Link href={""}>create coin</Link>
                <Link href={""}>My coins</Link>
                <Link href={""}>Redeem</Link>
                <Link href={""}>Mint</Link>
            </div>

            <div className="flex flex-col gap-5" style={{fontFamily:spaceLight.style.fontFamily}}>
                <p className="font-bold" style={{fontFamily:spaceBold.style.fontFamily}}>Resources</p>
                <Link href={""}>Help & support</Link>
                <Link href={""}>Governance</Link>
                <Link href={""}>Documentation</Link>
            </div>

            <div className="flex flex-col gap-5" style={{fontFamily:spaceLight.style.fontFamily}}>
                <p className="font-bold" style={{fontFamily:spaceBold.style.fontFamily}}>Legal</p>
                <Link href={""}>Terms of use</Link>
                <Link href={""}>Privacy Policy</Link>
            </div>
        </div>
        <div className="lg:w-[1700px] w-4/5 mx-auto h-[1px] bg-gray-500 mb-2 "></div>
        <p className="text-center capitalize" style={{fontFamily:spaceLight.style.fontFamily}}>Powered by: Etherfuse</p>
        </>
    )
}