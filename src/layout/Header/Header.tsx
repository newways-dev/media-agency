import styles from './Header.module.scss'

import logo from '../../assets/images/logo.png'
import whiteLogo from '../../assets/images/white-logo.png'
import { useState } from 'react'
import clsx from 'clsx'
import { Modal } from '../../components/modal/Modal'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  return (
    <>
      <header
        className={clsx(styles.header, { [styles.headerHover]: openMenu })}
      >
        <div className={styles.wrapper}>
          <img
            src={openMenu ? whiteLogo : logo}
            className={styles.logo}
            alt=""
          />
          <ul className={styles.links}>
            <li onMouseOver={() => setOpenMenu(false)} className={styles.link}>
              Проекты
            </li>
            <li className={styles.link} onMouseOver={() => setOpenMenu(true)}>
              Услуги
              <ul
                style={openMenu ? { display: 'flex' } : { display: 'none' }}
                className={styles.subList}
              >
                <li>Направления деятельности</li>
                <li>Наши проекты</li>
                <li>Отрасли</li>
                <li>Отзывы</li>
                <li>Немного о нас</li>
                <li>Журнал</li>
              </ul>
            </li>
            <li onMouseOver={() => setOpenMenu(false)} className={styles.link}>
              Компания
            </li>
            <li onMouseOver={() => setOpenMenu(false)} className={styles.link}>
              Журнал
            </li>
            <li onMouseOver={() => setOpenMenu(false)} className={styles.link}>
              Контакты
            </li>
          </ul>
          <button
            onClick={() => setModal(true)}
            className={clsx(styles.button, { [styles.hoverButton]: openMenu })}
          >
            Связаться
          </button>
          <span className={styles.number}>+7 (495) 123-12-12</span>
        </div>
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className={styles.mobileMenu}
        >
          <span>Меню</span>
        </div>
      </header>
      {openMenu && (
        <div onMouseLeave={() => setOpenMenu(false)} className={styles.menu} />
      )}
      {modal && (
        <Modal onClose={() => setModal(false)} className={styles.modal} />
      )}
      {mobileMenu && (
        <div className={styles.mobileLinks}>
          <ul className={styles.links}>
            <li className={styles.link}>Проекты</li>
            <li className={styles.link}>
              Услуги
              <ul className={styles.subList}>
                <li>Направления деятельности</li>
                <li>Наши проекты</li>
                <li>Отрасли</li>
                <li>Отзывы</li>
                <li>Немного о нас</li>
                <li>Журнал</li>
              </ul>
            </li>
            <li className={styles.link}>Компания</li>
            <li className={styles.link}>Журнал</li>
            <li className={styles.link}>Контакты</li>
          </ul>
        </div>
      )}
    </>
  )
}
