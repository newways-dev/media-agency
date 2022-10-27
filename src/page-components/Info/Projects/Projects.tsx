import { projects } from '../../../helpers/projects'
import styles from './Projects.module.scss'

import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Projects = forwardRef<HTMLDivElement>(
  ({ className }: ProjectsProps, ref) => {
    return (
      <div ref={ref} className={clsx(styles.projects, className)}>
        {projects.map((item, index) => (
          <div key={index} className={styles.image}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    )
  }
)
