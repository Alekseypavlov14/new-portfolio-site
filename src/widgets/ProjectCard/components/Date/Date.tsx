import { FC } from 'react'
import { Date as DefaultDate } from 'standard-ui'
import { Badge } from '@shared/components/Badge'

interface DateProps {
  time: number
}

export const Date: FC<DateProps> = ({ time }) => {
  return (
    <Badge>
      <DefaultDate time={time} />
    </Badge>
  )
}