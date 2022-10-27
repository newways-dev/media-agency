import styles from './Card.module.scss'

interface CardProps {
  img: string
  tag: string
  title: string
  description: string
}

export const Card = ({ img, tag, title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <span className={styles.tag}>
        <span>#</span> {tag}
      </span>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
