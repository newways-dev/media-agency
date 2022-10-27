import Marquee from 'react-fast-marquee'
import styles from './Companies.module.scss'

import { companies } from '../../assets/icons/companies'
import { ReactSVG } from 'react-svg'

export const Companies = () => {
  return (
    <Marquee speed={50}>
      <div className={styles.companies}>
        {companies.map((company, index) => (
          <ReactSVG key={index} src={company} />
        ))}
      </div>
    </Marquee>
  )
}
