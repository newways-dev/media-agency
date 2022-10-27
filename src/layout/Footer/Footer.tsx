import { ReactSVG } from 'react-svg'
import styles from './Footer.module.scss'

import vk from '../../assets/icons/vk.svg'
import tg from '../../assets/icons/telegram.svg'
import wa from '../../assets/icons/whatsapp.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.column}>
          <span className={styles.title}>Услуги</span>
          <li className={styles.link}>Сайты и сервисы</li>
          <li className={styles.link}>Сопровождение и развитие</li>
          <li className={styles.link}>Дизайн</li>
          <li className={styles.link}>Мобильные приложения</li>
          <li className={styles.link}>Аналитика</li>
          <li className={styles.link}>SERM / ORM</li>
          <li className={styles.link}>Автоматизация</li>
        </ul>
        <ul className={styles.column}>
          <span className={styles.title}>Направления</span>
          <li className={styles.link}>B2B - системы </li>
          <li className={styles.link}>UX/UI - дизайн</li>
          <li className={styles.link}>SEO-продвижение и контент маргетинг </li>
          <li className={styles.link}>CRM - системы</li>
          <li className={styles.link}>Мобильные приложения </li>
          <li className={styles.link}>Сопровождение и развитие</li>
          <li className={styles.link}>
            Разработка и внедрение корпоративных порталов
          </li>
          <li className={styles.link}>E - COMMERCE решения</li>
        </ul>
        <ul className={styles.column}>
          <span className={styles.title}>Проекты</span>
          <li className={styles.link}>E-commerce</li>
          <li className={styles.link}>Mobile</li>
          <li className={styles.link}>B2B-порталы</li>
          <li className={styles.link}>Битрикс24</li>
          <li className={styles.link}>Мобильные приложения </li>
          <li className={styles.link}>Корпоративные</li>
          <li className={styles.link}>Сервисы</li>
        </ul>
        <ul className={styles.column}>
          <span className={styles.title}>Агенство</span>
          <li className={styles.link}>О нас</li>
          <li className={styles.link}>Команда</li>
          <li className={styles.link}>Технологии</li>
          <li className={styles.link}>Фото</li>
          <li className={styles.link}>Отзывы</li>
          <li className={styles.link}>Журнал</li>
        </ul>
        <ul className={styles.column}>
          <span className={styles.title}>Контакты</span>
          <li className={styles.phone}>+7 (495) 123-12-12</li>
          <li className={styles.email}>support@website.ru</li>
          <li className={styles.social}>
            <ReactSVG src={tg} />
            <ReactSVG src={vk} />
            <ReactSVG src={wa} />
          </li>
        </ul>
      </div>
    </footer>
  )
}
