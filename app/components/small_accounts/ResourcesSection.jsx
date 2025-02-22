"use client"

import Image from "next/image"
import Link from "next/link"

const ResourcesSection = () => {
    const resources = [
        {
            date: "JAN 21, 2025",
            title: "Why Phase I Environmental Site Assessments Aren't Enough",
            link: "#",
        },
        {
            date: "DEC 19, 2024",
            title: "State of the Market - 2025 Outlook for Small Business and Personal Lines",
            link: "#",
        },
        {
            date: "DEC 3, 2024",
            title: "State of the Market - 2025 Outlook",
            link: "#",
        },
        {
            date: "NOV 26, 2024",
            title: "Did Hurricane Season 2024 Live Up to the Hype?",
            link: "#",
        },
    ]

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-bold leading-tight">
                        Explore Small Business Insurance Resources + Insights
                    </h2>
                    <div className="flex justify-between items-start">

                        <p className="text-[#4b5563]">Stay up-to-date on emerging property insurance trends and topics.</p>
                        <Link href="#" className="text-[#6366f1] hover:text-[#4f46e5] font-medium hidden md:block">
                            View All Resources
                        </Link>

                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    {/* Resources List */}
                    <div className="space-y-6">
                        {resources.map((resource, index) => (
                            <div key={index} className="group border-b border-[#e5e7eb] pb-6 last:border-0">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                    <span className="text-sm text-[#6b7280] font-medium whitespace-nowrap">{resource.date}</span>
                                    <Link
                                        href={resource.link}
                                        className="text-[#1a1a1a] group-hover:text-[#6366f1] transition-colors font-medium"
                                    >
                                        {resource.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right Side Image */}
                    <div className="relative h-[400px]  justify-end lg:h-full hidden lg:flex">
                        <Image
                            src="/ResourcesRImage.png"
                            alt="Business growth chart"
                            width={400}
                            height={400}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    {/* Mobile View All Link */}
                    {/* <Link href="#" className="text-[#6366f1] hover:text-[#4f46e5] font-medium block md:hidden">
            View All Resources
          </Link> */}
                </div>


            </div>
        </section>
    )
}

export default ResourcesSection

