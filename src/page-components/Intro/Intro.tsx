import { ReactSVG } from 'react-svg'
import styles from './Intro.module.scss'

import close from '../../assets/icons/close.svg'
import vk from '../../assets/icons/vk.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import play from '../../assets/icons/play.svg'
import { useState } from 'react'

export const Intro = () => {
  const [cookie, setCookie] = useState<boolean>(true)

  return (
    <div className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.title}>
            Мы <span>— digital agency</span> полного цикла, <br /> способное
            решать задачи любого уровня
          </h1>
          <div className={styles.circle}>
            <ReactSVG src={play} />
            <span>creative agency</span>
          </div>
        </div>
        <div className={styles.social}>
          <ReactSVG src={vk} />
          <ReactSVG src={telegram} />
          <ReactSVG src={whatsapp} />
        </div>
        {cookie && (
          <div className={styles.cookie}>
            <div className={styles.close}>
              <ReactSVG onClick={() => setCookie(false)} src={close} />
            </div>
            <p>ЭТОТ ВЕБ-САЙТ ИСПОЛЬЗУЕТ ФАЙЛЫ COOKIE. УЗНАТЬ БОЛЬШЕ</p>
          </div>
        )}
      </div>
    </div>
  )
}
