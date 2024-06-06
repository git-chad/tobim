import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`px-6 xl:px-0 w-full mx-auto xl:max-w-[1196px] ${className}`}>
        {children}
    </div>
  )
}

export default Container
