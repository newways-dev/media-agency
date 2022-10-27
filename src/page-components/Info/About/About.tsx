import styles from './About.module.scss'

import about200 from '../../../assets/images/about200.png'

import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface AboutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const About = forwardRef<HTMLDivElement>(
  ({ className }: AboutProps, ref) => {
    return (
      <div ref={ref} className={clsx(styles.about, className)}>
        <div className={styles.projects}>
          <span className={styles.more}>более</span>
          <div>
            <img src={about200} alt="" />
            <span>проектов</span>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.value}>
            <span className={styles.title}>
              <span>10</span> лет
            </span>
            <span className={styles.description}>на рынке</span>
          </div>
          <div className={styles.value}>
            <span className={styles.title}>
              <span>10</span> лет
            </span>
            <span className={styles.description}>на рынке</span>
          </div>
          <div className={styles.value}>
            <span className={styles.title}>
              <span>20</span> человек
            </span>
            <span className={styles.description}>в штате</span>
          </div>
          <div className={styles.value}>
            <span className={styles.title}>
              <span>20</span> человек
            </span>
            <span className={styles.description}>в штате</span>
          </div>
        </div>
      </div>
    )
  }
)
