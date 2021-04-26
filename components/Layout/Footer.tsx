import React, { FC } from 'react'
import { ExternalLink } from '../snippets'

const Footer: FC = () => (
  <div className="bg-light py-3">
    <div className="text-center">
      <small>
        &copy; 2021 <ExternalLink href="https://arthur1.github.io/">Arthur</ExternalLink>
      </small>
    </div>
    <div className="text-center">
      <small>本サイトのコンテンツを無断で転載することはご遠慮ください。</small>
    </div>
  </div>
)

export default Footer
