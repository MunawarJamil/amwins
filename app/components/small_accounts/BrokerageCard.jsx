"use client"

import Image from "next/image"

const BrokerageCard = ({ icon, title, description, ctaText, ctaLink }) => {
    return (
        <div className="px-4 py-12 max-w-6xl mx-auto">
            <div className="w-full  bg-white rounded-lg p-6 grid sm:grid-cols-5 shadow-sm">
                {/* Icon */}
                <div className=" col-span-2 flex flex-col gap-3">
                    <Image src={icon || "/placeholder.svg"} alt="" width={40} height={40} className="text-[#1a1a1a]" />
                    <h2 className="text-[#1a1a1a] text-xl font-semibold">{title}</h2>
                </div>

                {/* Content */}
                <div className="flex col-span-3 flex-col gap-2">
                    <p className="text-[#4a4a4a] text-base leading-relaxed">{description}</p>
                    {ctaText && <a
                        href={ctaLink}
                        className="inline-block mt-2 text-[#6366f1] hover:text-[#4f46e5] font-medium transition-colors"
                    >
                        {ctaText}
                    </a>}
                </div>
            </div>
        </div>
    )
}

export default BrokerageCard