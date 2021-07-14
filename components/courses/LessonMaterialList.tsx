import React, { FC, ReactNode } from 'react'
import { ExternalLink } from '../snippets'
import { FaYoutube, FaFilePdf, FaFileCode, FaLink } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../../styles/components/courses/LessonMaterialList.module.scss'

interface LessonMovieProps {
  children: ReactNode
  href: string
}

const LessonMovie: FC<LessonMovieProps> = props => {
  const { children, href } = props
  return (
    <li className={styles.LessonMaterial}>
      <FaYoutube className={styles.LessonMaterialIcon} />
      <ExternalLink href={href}>{children}</ExternalLink>
    </li>
  )
}

interface LessonSlideProps {
  children: ReactNode
  fileName: string
}

const LessonSlide: FC<LessonSlideProps> = props => {
  const { children, fileName } = props
  return (
    <li className={styles.LessonMaterial}>
      <FaFilePdf className={styles.LessonMaterialIcon} />
      <a href={`./slides/${fileName}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
}

interface LessonFileProps {
  children: ReactNode
  fileName: string
}

const LessonFile: FC<LessonFileProps> = props => {
  const { children, fileName } = props
  return (
    <li className={styles.LessonMaterial}>
      <FaFileCode className={styles.LessonMaterialIcon} />
      <a href={`./files/${fileName}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
}

interface LessonAppendixProps {
  children: ReactNode
  href: string
}

const LessonAppendix: FC<LessonAppendixProps> = props => {
  const { children, href } = props
  return (
    <li className={styles.LessonMaterial}>
      <FaLink className={styles.LessonMaterialIcon} />
      <Link href={href}>{children}</Link>
    </li>
  )
}

interface LessonMaterialListProps {
  // TODO: 要素を制限する
  children: ReactNode
}

const LessonMaterialList: FC<LessonMaterialListProps> = props => {
  const { children } = props
  return <ul className={styles.LessonMaterialList}>{children}</ul>
}

export { LessonMovie, LessonSlide, LessonFile, LessonAppendix }
export default LessonMaterialList
