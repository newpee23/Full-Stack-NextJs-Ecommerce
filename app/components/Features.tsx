// REACT AND NEXT IMPORT
import React from "react";
import Image from "next/image";

// IMAGES
import moonlamp from "@/public/transparentmoonlamp.png";

// ICONS
import { BsBatteryCharging } from "react-icons/bs";
const Features = () => {
    return (
        <section className="py-5" id="features">
            <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
                <div>
                    <ul className="space-y-10">
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={moonlamp} width={500} height={500} alt="moonlamp" loading="lazy"  placeholder='blur'/>
                </div>
                <div>
                    <ul className="space-y-10 text-right">
                        <li>
                            <div className="flex gap-2 items-center justify-end text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center justify-end text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center justify-end text-xl font-bold text-dark">
                                <h3>Battery Life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Features