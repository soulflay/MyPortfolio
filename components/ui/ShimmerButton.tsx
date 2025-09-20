import React from 'react'


const ShimmerButton = ({
    title, icon, position, handleClick, otherClasses
}:  {
    title: string; icon: React.ReactNode, position: string; handleClick?: 
    () => void; otherClasses?: string
})=> {
  return (
    <button className="cursor-pointer md:w-47 md:mt-4 w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    onClick={handleClick}
    >
      {/* Glowing rotating border */}
       
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner shimmer button content */}
      <span className="gap-2 relative group inline-flex h-full w-full items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] bg-[position:0_0] px-6 font-medium text-slate-400 transition-all duration-300 overflow-hidden will-change-[background-position] hover:ring-1 hover:ring-slate-600 hover:shadow-xl">
        
        {/* Shimmer swipe streak */}
        <div className={`absolute h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 blur-sm 
        -rotate-45 -left-16 group-hover:left-[150%] transition-all duration-500 delay-200 pointer-events-none  
        ${otherClasses}`} />
       
        
        <span className={`bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 bg-clip-text text-transparent text-center ${otherClasses}`}>
        {title}
        </span>
        {position == 'left' && icon}
        {position == 'right' && icon}
      </span>
    </button>
    )
}

export default ShimmerButton
// Button code

      