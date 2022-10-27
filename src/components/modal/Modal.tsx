import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Modal.module.scss'

import vk from '../../assets/icons/vk.svg'
import tg from '../../assets/icons/telegram.svg'
import wa from '../../assets/icons/whatsapp.svg'

import close from '../../assets/icons/close.svg'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose: () => void
}

export const Modal = ({ onClose, className, ...props }: ModalProps) => {
  return (
    <div className={clsx(styles.modal, className)} {...props}>
      <ReactSVG
        className={styles.close}
        src={close}
        onClick={() => onClose()}
      />
      <div className={styles.text}>
        <p className={styles.title}>Напиши нам!</p>
        <p className={styles.description}>
          Кратко опишите свою задачу, и мы свяжемся с вами в кратчайшие сроки.
        </p>
      </div>
      <form className={styles.form}>
        <input placeholder="Имя" type="text" className={styles.input} />
        <input placeholder="Телефон" type="text" className={styles.input} />
        <input placeholder="Email" type="email" className={styles.input} />
        <select className={styles.select}>
          <option className={styles.option} disabled selected>
            Бюджет
          </option>
          <option className={styles.option}>до 500 тыс. рублей</option>
          <option className={styles.option}>до 1 млн рублей</option>
          <option className={styles.option}>от 1 млн до 2 млн рублей</option>
          <option className={styles.option}>более 5 млн рублей</option>
        </select>
        <textarea placeholder="Сообщение" className={styles.message} />
        <button className={styles.button}>Связаться</button>
        <p className={styles.terms}>
          Нажимая на кнопку, вы соглашаетесь с{' '}
          <span>Политикой персональных данных</span>
        </p>
      </form>
      <div className={styles.contacts}>
        <div className={styles.email}>
          Наш Email: <br /> <span>support@website.ru</span>
        </div>
        <div className={styles.address}>
          Наш адрес: <br /> <span>109012</span> Россия, Москва, Красная площадь,
          <span>1</span>
        </div>
        <div className={styles.social}>
          <ReactSVG src={vk} />
          <ReactSVG src={tg} />
          <ReactSVG src={wa} />
        </div>
      </div>
    </div>
  )
}
