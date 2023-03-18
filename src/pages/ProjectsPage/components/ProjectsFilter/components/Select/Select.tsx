import { FC } from 'react'
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
    <ReactSelect 
      className={styles.Select} 
      classNamePrefix={'Select'}
      onChange={updateValue}
      options={options} 
      value={value}
      isMulti
    />
  )
}