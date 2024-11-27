import React from 'react'

interface FancyAnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const FancyAnimatedButton: React.FC<FancyAnimatedButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="relative px-8 py-4 text-lg font-bold 
                text-gray-800 bg-white rounded-md shadow-lg 
                overflow-hidden transition-all duration-300 
                ease-in-out
                 motion-safe:hover:text-white
                 motion-safe:hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:ring-opacity-50
                 group"
      onClick={onClick}
    >
      {/* Background line animation */}
      <span className="absolute inset-0 w-0 bg-gradient-to-r 
                    from-blue-500 to-purple-600
                       motion-safe:group-hover:w-full
                       motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-in-out
                       motion-safe:group-hover:motion-preset-expand" />
      
      {/* Vertical lines animation */}
      <span className="absolute inset-0 flex justify-around overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="w-px h-full bg-gray-300 
                        transform translate-y-full
                       motion-safe:group-hover:motion-translate-y-in-100
                       motion-safe:transition-transform motion-safe:duration-700 
                       motion-safe:ease-in-out"
            style={{ transitionDelay: `${index * 100}ms` }}
          />
        ))}
      </span>

      {/* Button text */}
      <span className="relative z-10 motion-safe:group-hover:motion-preset-float">
        {children}
      </span>
    </button>
  )
}

export default FancyAnimatedButton

