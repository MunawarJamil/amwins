"use client"

import { useState } from "react"
import { IoChevronDownOutline } from "react-icons/io5"
import Image from "next/image"

const BrokerSearch = () => {
    const [nameSearch, setNameSearch] = useState("")
    const [selectedSolution, setSelectedSolution] = useState("")
    const [selectedState, setSelectedState] = useState("")

    const features = [
        {
            icon: "/building-icon.svg",
            title: "Commercial + personal lines coverage",
            description:
                "From general liability and property to niche-based risks, Brokerage Access provides specialized solutions to manage even the most complex exposures.",
        },
        {
            icon: "/building-icon.svg",
            title: "Nationwide relationships",
            description:
                "With offices nationwide, Brokerage Access has the reach and relationships to deliver tailored solutions for your clients, wherever they are.",
        },
        {
            icon: "/building-icon.svg",
            title: "Market reach + clout",
            description:
                "Partnering with Brokerage for small business insurance gives you access to unmatched expertise and extensive market reach.",
        },
    ]

    const solutions = ["Solution 1", "Solution 2", "Solution 3"]
    const states = ["State 1", "State 2", "State 3"]

    return (
        <div className="w-full">
            <div className="max-w-6xl px-4 mx-auto space-y-20">
                {/* Feature Cards */}
                <div className="grid sm:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>

                {/* Broker Search Section */}
                <div className="space-y-6">
                    <h2 className="text-[#ffffff] text-3xl font-bold">Broker search</h2>
                    <div className="flex flex-col md:flex-row">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            className="flex-1 px-4 py-2.5 border-2 border-[#CA93F5] bg-[#ffffff] text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                        />
                        <div className="w-full md:w-48">
                            <Dropdown
                                options={solutions}
                                placeholder="By Solution..."
                                value={selectedSolution}
                                onChange={setSelectedSolution}
                            />
                        </div>
                        <div className="w-full md:w-48">
                            <Dropdown options={states} placeholder="By State..." value={selectedState} onChange={setSelectedState} />
                        </div>
                        <button className="px-6 py-2.5 border-2 border-[#CA93F5] bg-[#11071F] text-[#ffffff]  hover:bg-[#321856] transition-colors focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrokerSearch

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 rounded-lg bg-[#cbcbcb]/10 backdrop-blur">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="sm:w-12 h-8 w-8 sm:h-12 relative">
                    <Image
                        src={icon}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className="brightness-0 invert" // Makes the icon white
                    />
                </div>
                <h3 className="text-[#ffffff] text-xs sm:text-xl font-semibold">{title}</h3>
                <p className="text-[#e5e7eb] hidden sm:block text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
const Dropdown = ({ options, placeholder, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (option) => {
        onChange(option)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 bg-[#ffffff] text-[#1a1a1a] border-2 border-[#CA93F5] hover:bg-[#f8f8f8] focus:outline-none"
            >
                <span className="truncate">{value || placeholder}</span>
                <IoChevronDownOutline
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#ffffff] border border-[#e5e7eb]  shadow-lg">
                    <ul className="py-1 max-h-60 overflow-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-[#1a1a1a] hover:bg-[#f3f4f6] cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}