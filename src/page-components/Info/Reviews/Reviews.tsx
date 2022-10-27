import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

import video from '../../../assets/images/review-video.png'
import play from '../../../assets/icons/play.svg'
import next from '../../../assets/icons/next.svg'
import styles from './Reviews.module.scss'
import clsx from 'clsx'

export interface ReviewsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews = forwardRef<HTMLDivElement>(
  ({ className }: ReviewsProps, ref) => {
    return (
      <div ref={ref} className={clsx(styles.reviewsWrapper, className)}>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <p>
              Профессиональная студия по веб разработкам. Приятные люди,
              адекватный технический директор и руководство. Работали на
              нескольких проектах в команде...
            </p>
            <a className={styles.link} href="/">
              Читать
            </a>
          </div>
          <div className={styles.video}>
            <ReactSVG className={styles.play} src={play} />
            <ReactSVG className={styles.next} src={next} />
            <img src={video} alt="" />
          </div>
        </div>
        <div className={styles.cta}>
          <span className={styles.title}>
            Получи свое выгодное предложение по созданию и продвижению сайта!
          </span>
          <div className={styles.field}>
            <input
              className={styles.input}
              placeholder="Просто оставь свой телефон"
            />
            <button className={styles.button}>Связаться</button>
          </div>
        </div>
      </div>
    )
  }
)
