"use client"

import { useState } from "react"

const FeatureCard = ({ icon: Icon, title, description, isHovered, onHover }) => {
    return (
        <div
            className={`p-8 rounded-lg transition-all duration-300 text-center cursor-pointer
        ${isHovered ? "bg-[#ffffff] shadow-xl translate-y-[-8px]" : "bg-transparent"}
      `}
            onMouseEnter={onHover}
        >
            <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full p-3 bg-[#E4D5F7] flex items-center justify-center">
                    {Icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#11071F]">{title}</h3>
            <p className="text-[#4b5563] mb-6 text-sm leading-relaxed">{description}</p>
            <button className="text-sm font-semibold text-[#11071F] tracking-wider hover:text-[#6366f1] transition-colors">
                LEARN MORE
            </button>
        </div>
    )
}

const ExpertiseSection = () => {
    const [hoveredCard, setHoveredCard] = useState(0)

    const features = [
        {
            icon: <svg wwidth="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V26.7944H7.94431L7.94457 34.6663H26V0H0ZM8.88319 24.5552H4.33309V20.2218H8.88319V24.5552ZM21.6661 24.5552H10.1105V23.1107H21.6661V24.5552ZM21.6661 18.7776H4.33295V17.3331H21.6661V18.7776ZM21.6661 14.4441H4.33295V12.9997H21.6661V14.4441ZM21.6661 10.111H4.33295V8.66651H21.6661V10.111ZM21.6661 5.77756H4.33295V4.33309H21.6661V5.77756Z" fill="#11071F" />
            </svg>
            ,
            title: "Market Reach",
            description:
                "Handling a high volume of new submissions each year, ensuring broad access to tailored insurance solutions.",
        },
        {
            icon: <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8549 0C15.5902 0 12.9436 3.0899 12.9436 6.90149C12.9436 9.54494 14.2166 11.8408 16.0859 13L13.9182 14.0046L8.14978 16.68C7.59252 16.9586 7.31439 17.4311 7.31439 18.0999V24.4529C7.36023 25.2472 7.83681 25.9875 8.6095 26H29.1316C30.0137 25.9233 30.46 25.2128 30.4686 24.4529V18.0999C30.4686 17.4311 30.1905 16.9586 29.6333 16.68L24.0737 14.0046L21.7632 12.91C23.5558 11.7247 24.7662 9.47848 24.7662 6.90152C24.7662 3.0899 22.1196 0 18.8549 0ZM9.32004 2.42693C7.9151 2.48029 6.80164 3.08822 5.9557 4.05689C5.01998 5.22316 4.56381 6.60785 4.55499 7.98534C4.61246 10.0222 5.52386 11.9506 7.14636 12.9592L0.668558 15.9694C0.222716 16.1366 0 16.5267 0 17.1397V22.2384C0.0348132 22.9146 0.385914 23.4829 1.04424 23.4926H5.34957V18.0999C5.42081 16.6581 6.09786 15.4927 7.31439 14.924L11.6186 12.8764C11.9529 12.6813 12.2735 12.4162 12.58 12.0818C10.8053 9.34368 10.5589 6.06408 11.7026 3.17952C10.9587 2.72427 10.1227 2.4317 9.32004 2.42693ZM28.5458 2.42693C27.627 2.44617 26.778 2.78451 26.0805 3.26232C27.193 6.173 26.8861 9.45463 25.2439 11.9978C25.6061 12.4158 25.9832 12.7363 26.3734 12.9592L30.5107 14.924C31.771 15.6153 32.421 16.791 32.4335 18.0999V23.4927H36.8636C37.5922 23.4298 37.9027 22.8487 37.9091 22.2384V17.1397C37.9091 16.5824 37.6863 16.1924 37.2405 15.9694L30.8455 12.9172C32.504 11.6944 33.3368 9.86174 33.3529 7.98534C33.3088 6.50019 32.8551 5.12119 31.9522 4.05689C31.0087 3.03338 29.8384 2.43777 28.5458 2.42693Z" fill="#11071F" />
            </svg>
            ,
            title: "Industry Presence",
            description:
                "Managing billions in annual premiums, providing competitive coverage options across diverse industries.",
        },
        {
            icon: <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9889 0H3.99869C1.73889 0 0 1.73827 0 3.99868V20.6875C0 22.9473 1.91226 24.6862 4.17206 24.6862L4.17266 24.6856V31.9868C4.17266 32.6823 4.52009 33.2037 5.21553 33.5511C5.73697 33.8985 6.4324 33.7251 7.1278 33.3771L17.5582 24.685H27.9886C30.2484 24.685 31.9872 22.9467 31.9872 20.6863V3.99899C31.9872 1.91273 30.249 0.000309226 27.9886 0.000309226L27.9889 0ZM10.6047 13.7335H8.34489C7.30203 13.7335 6.60663 13.0381 6.60663 11.9953C6.60663 10.9524 7.30207 10.257 8.34489 10.257H10.6047C11.6476 10.257 12.343 10.9524 12.343 11.9953C12.343 13.0381 11.4741 13.7335 10.6047 13.7335ZM17.037 13.7335H14.7772C13.7343 13.7335 13.0389 13.0381 13.0389 11.9953C13.0389 10.9524 13.7344 10.257 14.7772 10.257H17.037C18.0799 10.257 18.7753 10.9524 18.7753 11.9953C18.7753 13.0381 18.0798 13.7335 17.037 13.7335ZM23.6429 13.7335H21.3831C20.3402 13.7335 19.6448 13.0381 19.6448 11.9953C19.6448 10.9524 20.3402 10.257 21.3831 10.257H23.6429C24.6857 10.257 25.3811 10.9524 25.3811 11.9953C25.3811 13.0381 24.5123 13.7335 23.6429 13.7335Z" fill="#11071F" />
            </svg>
            ,
            title: "Underwriting Support",
            description:
                "Backed by hundreds of dedicated underwriting teams, delivering specialized expertise for complex risks.",
        },
    ]

    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#11071F]">Unmatched Scale & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        isHovered={hoveredCard === index}
                        onHover={() => setHoveredCard(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExpertiseSection
