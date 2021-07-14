import React, { FC, ReactNode } from 'react'

interface HeadlineProps {
  children: ReactNode
}

const Headline1: FC<HeadlineProps> = props => {
  const { children } = props
  return <h1 className="text-primary mt-4">{children}</h1>
}

const Headline2: FC<HeadlineProps> = props => {
  const { children } = props
  return <h2 className="text-secondary mt-4">{children}</h2>
}

const Headline3: FC<HeadlineProps> = props => {
  const { children } = props
  return <h3 className="text-dark mt-3">{children}</h3>
}

interface ExternalLinkProps {
  children: ReactNode
  href: string
}

const ExternalLink: FC<ExternalLinkProps> = props => {
  const { children, href } = props
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export { Headline1, Headline2, Headline3, ExternalLink }
