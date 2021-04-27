import React, { FC, ReactNode } from 'react'

interface LessonBoxProps {
  id: number
  title: string
  children: ReactNode
}

const LessonBox: FC<LessonBoxProps> = (props: LessonBoxProps) => {
  const { id, title, children } = props
  return (
    <div key={id}>
      <h3 className="text-dark mt-3">
        第{id}回: {title}
      </h3>
      {children}
    </div>
  )
}

export default LessonBox
