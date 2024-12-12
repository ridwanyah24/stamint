import { Button } from "@/components/ui/button";
import { spaceBold } from "../utils/fontFamilies";
import { ArrowRight } from "lucide-react";
import { recentActivities } from "../data/data";

export default function Page(){
    return(
        <div className="p-8 mr-10">
            <div className="flex items-center justify-between mt-10">
                <p style={{fontFamily:spaceBold.style.fontFamily}} className="text-[32px] px-16 col-span-2">Welcome back!</p>
                <Button variant={"default"} className="h-[48px] flex gap-3 mr-5" style={{fontFamily:spaceBold.style.fontFamily}}>Create Coin
                    <div className="w-4 h-4 rounded-full text-whiteb bg-black p-4 flex items-center justify-center">
                        <ArrowRight/>
                    </div>
                </Button>
            </div>

            <div className="mt-10 px-16 flex gap-10">
                <section className="w-full flex items-center justify-center gap-5 rounded-xl border-gray-500 border-2 h-[200px]">
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">Total Coins: </p>
                    <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0.5C22.628 0.5 26.912 1.316 30.116 2.718C31.714 3.418 33.134 4.302 34.18 5.386C35.15 6.386 35.87 7.642 35.984 9.098L36 9.5V29.5C36 31.128 35.238 32.52 34.18 33.614C33.134 34.698 31.714 35.582 30.116 36.282C26.912 37.682 22.628 38.5 18 38.5C13.372 38.5 9.088 37.684 5.884 36.282C4.286 35.582 2.866 34.698 1.82 33.614C0.85 32.614 0.13 31.358 0.0159998 29.902L0 29.5V9.5C0 7.872 0.762 6.48 1.82 5.386C2.866 4.302 4.286 3.418 5.884 2.718C9.088 1.318 13.372 0.5 18 0.5ZM32 25.314C31.3941 25.6779 30.7647 26.0013 30.116 26.282C26.912 27.682 22.628 28.5 18 28.5C13.372 28.5 9.088 27.684 5.884 26.282C5.23531 26.0013 4.60593 25.6779 4 25.314V29.5C4 29.804 4.132 30.252 4.696 30.834C5.268 31.426 6.192 32.05 7.488 32.618C10.076 33.75 13.79 34.5 18 34.5C22.21 34.5 25.924 33.75 28.512 32.618C29.808 32.05 30.732 31.426 31.304 30.834C31.868 30.254 32 29.804 32 29.5V25.314ZM32 15.314C31.3941 15.6779 30.7647 16.0013 30.116 16.282C26.912 17.682 22.628 18.5 18 18.5C13.372 18.5 9.088 17.684 5.884 16.282C5.23531 16.0013 4.60593 15.6779 4 15.314V19.5C4 19.804 4.132 20.252 4.696 20.834C5.268 21.426 6.192 22.05 7.488 22.618C10.076 23.75 13.79 24.5 18 24.5C22.21 24.5 25.924 23.75 28.512 22.618C29.808 22.05 30.732 21.426 31.304 20.834C31.868 20.254 32 19.804 32 19.5V15.314ZM18 4.5C13.79 4.5 10.076 5.25 7.488 6.382C6.192 6.95 5.268 7.574 4.696 8.166C4.132 8.746 4 9.196 4 9.5C4 9.804 4.132 10.252 4.696 10.834C5.268 11.426 6.192 12.05 7.488 12.618C10.076 13.75 13.79 14.5 18 14.5C22.21 14.5 25.924 13.75 28.512 12.618C29.808 12.05 30.732 11.426 31.304 10.834C31.868 10.254 32 9.804 32 9.5C32 9.196 31.868 8.748 31.304 8.166C30.732 7.574 29.808 6.95 28.512 6.382C25.924 5.25 22.21 4.5 18 4.5Z" fill="#104BFF"/>
                    </svg>
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">5</p>
                </section>
                <section className="w-full flex items-center justify-center gap-5 rounded-xl border-gray-500 border-2 h-[200px]">
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">Yield Earnings: </p>
                    <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.998 13.5H23.998C23.998 7.826 18.488 5.238 13.998 4.642V0.5H9.99805V4.642C5.50805 5.238 -0.00195312 7.826 -0.00195312 13.5C-0.00195312 18.912 5.33005 21.726 9.99805 22.36V32.3C7.10205 31.798 3.99805 30.252 3.99805 27.5H-0.00195312C-0.00195312 32.678 4.84805 35.738 9.99805 36.372V40.5H13.998V36.36C18.488 35.764 23.998 33.174 23.998 27.5C23.998 21.826 18.488 19.238 13.998 18.642V8.7C16.658 9.178 19.998 10.582 19.998 13.5ZM3.99805 13.5C3.99805 10.582 7.33805 9.178 9.99805 8.7V18.298C7.25605 17.792 3.99805 16.294 3.99805 13.5ZM19.998 27.5C19.998 30.418 16.658 31.822 13.998 32.3V22.7C16.658 23.178 19.998 24.582 19.998 27.5Z" fill="#104BFF"/>
                    </svg>
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">500</p>
                </section>
                <section className="w-full flex items-center justify-center gap-5 rounded-xl border-gray-500 border-2 h-[200px]">
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">Portfolio Value: </p>
                    <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.998 13.5H23.998C23.998 7.826 18.488 5.238 13.998 4.642V0.5H9.99805V4.642C5.50805 5.238 -0.00195312 7.826 -0.00195312 13.5C-0.00195312 18.912 5.33005 21.726 9.99805 22.36V32.3C7.10205 31.798 3.99805 30.252 3.99805 27.5H-0.00195312C-0.00195312 32.678 4.84805 35.738 9.99805 36.372V40.5H13.998V36.36C18.488 35.764 23.998 33.174 23.998 27.5C23.998 21.826 18.488 19.238 13.998 18.642V8.7C16.658 9.178 19.998 10.582 19.998 13.5ZM3.99805 13.5C3.99805 10.582 7.33805 9.178 9.99805 8.7V18.298C7.25605 17.792 3.99805 16.294 3.99805 13.5ZM19.998 27.5C19.998 30.418 16.658 31.822 13.998 32.3V22.7C16.658 23.178 19.998 24.582 19.998 27.5Z" fill="#104BFF"/>
                    </svg>
                    <p style={{fontFamily:spaceBold.style.fontFamily}} className="lg:text-[30px] text-[20px]">20000</p>
                </section>
            </div>

            <div  className="mt-20">
                <p style={{fontFamily:spaceBold.style.fontFamily}} className="text-[32px] px-16 mt-10">Recent Activities</p>
                <div className="overflow-x-auto mt-5 lg:max-w-full md:max-w-full lg:w-full md:w-full lg:px-12 ">
                    <table className="w-full border-collapse table-auto" style={{ fontFamily: spaceBold.style.fontFamily }}>
                        <thead>
                            <tr className="font-semibold border-b">
                                <th className="p-4 text-left ">Activity Type</th>
                                <th className="p-4 text-start">Date & Time</th>
                                <th className="p-4 text-left">Amount</th>
                                <th className="p-4 text-left ">Status</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: spaceBold.style.fontFamily }}>
                            {recentActivities.map((activity, index)=>
                            <tr key={index} className="border-b">
                                <th className="p-4 text-start">{activity.activityName}</th>
                                <th className="text-start">{activity.datenTime}</th>
                                <th className="text-start">{activity.amount}</th>
                                <th className="text-start ">
                                    <span className="flex gap-3 text-green-500 items-center font-normal">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                                        {activity.status}
                                    </span>
                                </th>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}