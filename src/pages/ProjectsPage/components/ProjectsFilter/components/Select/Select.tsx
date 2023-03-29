import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { ResultAmount } from '../ResultAmount'
import { useOptions } from './../../hooks/useOptions'
import { useValue } from './../../hooks/useValue'
import ReactSelect from 'react-select'
import styles from './Select.module.css'
import './Select.css'

interface SelectProps {}

export const Select: FC<SelectProps> = () => {
  const { value, updateValue } = useValue()
  const options = useOptions()

  return (
    <div className={styles.SelectBlock}>
      <Appear from={Directions.Bottom}>
        <ReactSelect 
          className={styles.Select} 
          classNamePrefix={'Select'}
          onChange={updateValue}
          isSearchable={false} 
          options={options}
          value={value}
          isMulti
        />
      </Appear>

      <ResultAmount />
    </div>
  )
}