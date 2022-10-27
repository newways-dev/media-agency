import Marquee from 'react-fast-marquee'
import styles from './Tech.module.scss'

export const Tech = () => {
  const technologies = [
    'Node.js',
    'JavaScript / TypeScript',
    'Vue / Vuex',
    'React / Redux',
    'Angular',
    'Laravel',
    'GraphQL',
    'MySQL',
    'MongoDB',
    'ElasticSearch',
    'Memcached',
  ]

  return (
    <div className={styles.marquee}>
      <Marquee speed={120}>
        <ul className={styles.list}>
          {technologies.map((item, index) => (
            <li key={index} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  )
}
