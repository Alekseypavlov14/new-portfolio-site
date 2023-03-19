import { FC } from 'react'
import { technologiesSelector, useFilterStore } from '@app/store'
import { resultSelector, useSearchStore } from '../../store'
import styles from './ResultAmount.module.css'

interface ResultAmountProps {}

export const ResultAmount: FC<ResultAmountProps> = () => {
  const technologies = useFilterStore(technologiesSelector)
  const result = useSearchStore(resultSelector)

  if (technologies.length === 0) return (
    <div className={styles.ResultAmount} />
  )

  if (result.length === 0) return (
    <div className={styles.ResultAmount}>
      There is no projects with such set of tools
    </div>
  )

  if (result.length === 1) return (
    <div className={styles.ResultAmount}>
      1 project was found
    </div>
  )

  return (
    <div className={styles.ResultAmount}>
      {result.length} projects were found
    </div>
  )
}