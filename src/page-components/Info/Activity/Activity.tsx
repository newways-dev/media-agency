import { forwardRef } from 'react'
import ecommerce from '../../../assets/images/e-commerce.png'
import seo from '../../../assets/images/seo.png'
import styles from './Activity.module.scss'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Tech } from './Tech/Tech'

export interface ActivityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Activity = forwardRef<HTMLDivElement>(
  ({ className }: ActivityProps, ref) => {
    const images = [ecommerce, seo, seo, seo, seo]

    return (
      <div ref={ref} className={clsx(styles.activity, className)}>
        <div className={styles.images}>
          {images.map((img, index) => (
            <img src={img} key={index} alt="" />
          ))}
        </div>
        <Tech />
      </div>
    )
  }
)
