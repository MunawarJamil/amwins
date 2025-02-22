"use client"

const CTASection = ({
  title = "Let's Work Together",
  description = "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  buttonText = "Get Started",
  onButtonClick = () => {},
}) => {
  return (
    <div className="w-full  py-16">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="bg-[#1E1433] rounded-2xl px-6 py-16 md:py-20 text-center shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff]">{title}</h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">{description}</p>
            <div className="pt-4">
              <button
                onClick={onButtonClick}
                className="bg-[#CA93F5] text-[#1E1433] px-8 py-3 rounded-full font-medium 
                         hover:bg-[#8615dd] transition-colors duration-200 
                         transform hover:scale-105 active:scale-100"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection

