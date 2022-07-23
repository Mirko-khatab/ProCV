import React from "react"

type ContainerType = React.FC<{
  className?: string
}>
const Container: ContainerType = ({ className, children }) => {
  return (
    <div
      className={`w-full max-w-7xl md:max-w-4xl lg:max-w-3xl mx-auto p-5 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
