import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react'
import { ReactSVG } from 'react-svg'
import { useState } from 'react'

import { info } from '../../helpers/info'
import { Activity } from './Activity/Activity'
import { Projects } from './Projects/Projects'
import { Industry } from './Industry/Industry'
import { Reviews } from './Reviews/Reviews'
import { About } from './About/About'
import { Journal } from './Journal/Journal'
import { Content } from './Content/Content'

import styles from './Info.module.scss'

import arrow from '../../assets/icons/arrow.svg'

export interface InfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Info = ({ className }: InfoProps) => {
  const [active, setActive] = useState<number>(0)

  const { ref: activityRef, inView: activityView } = useInView()
  const { ref: projectsRef, inView: projectsView } = useInView()
  const { ref: industryRef, inView: industryView } = useInView()
  const { ref: reviewsRef, inView: reviewsView } = useInView()
  const { ref: aboutRef, inView: aboutView } = useInView()
  const { ref: journalRef, inView: journalView } = useInView()

  const projectsTitle = (
    <div>
      <span>Проекты</span>
      <span>
        Все проекты
        <ReactSVG src={arrow} />
      </span>
    </div>
  )

  return (
    <div className={clsx(styles.info, className)}>
      <div className={styles.wrapper}>
        <div className={styles.linksWrapper}>
          <ul className={styles.links}>
            <li
              className={clsx(styles.link, {
                [styles.active]: activityView && !projectsView,
              })}
            >
              Направления деятельности
            </li>
            <li
              className={clsx(styles.link, {
                [styles.active]: projectsView && !industryView,
              })}
            >
              Наши проекты
            </li>
            <li
              className={clsx(styles.link, {
                [styles.active]: industryView && !reviewsView,
              })}
            >
              Отрасли
            </li>
            <li
              className={clsx(styles.link, {
                [styles.active]: reviewsView && !aboutView,
              })}
            >
              Отзывы
            </li>
            <li
              className={clsx(styles.link, {
                [styles.active]: aboutView && !journalView,
              })}
            >
              Немного о нас
            </li>
            <li className={clsx(styles.link, { [styles.active]: journalView })}>
              Журнал
            </li>
            {/* {info.map((link, index) => (
              <li
                className={clsx(styles.link, {
                  [styles.active]: active === index,
                })}
                onClick={() => setActive(index)}
                key={index}
              >
                {link}
              </li>
            ))} */}
          </ul>
        </div>
        <div className={styles.content}>
          <Content heading="Направления деятельности">
            <Activity ref={activityRef} />
          </Content>
          <Content heading={projectsTitle}>
            <Projects ref={projectsRef} />
          </Content>
          <Content heading="Отрасли">
            <Industry ref={industryRef} />
          </Content>
          <Content heading="Отзывы">
            <Reviews ref={reviewsRef} />
          </Content>
          <Content heading="Немного о нас">
            <About ref={aboutRef} />
          </Content>
          <Content heading="Журнал">
            <Journal ref={journalRef} />
          </Content>
        </div>
      </div>
    </div>
  )
}
