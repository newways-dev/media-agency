import { ReactNode } from 'react'
import styles from './Content.module.scss'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: ReactNode
  children: ReactNode
}

export const Content = ({
  heading,
  children,
  className,
  ref,
  ...props
}: ContentProps) => {
  return (
    <div ref={ref} className={clsx(styles.content, className)} {...props}>
      <span className={styles.title}>{heading}</span>
      {children}
    </div>
  )
}
