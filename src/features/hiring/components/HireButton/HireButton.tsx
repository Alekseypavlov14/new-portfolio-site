import { FC } from 'react'
import { useSendEmail } from './../../hooks/useSendEmail'
import { Button } from '@shared/components/Button'

interface HireButtonProps {}

export const HireButton: FC<HireButtonProps> = () => {
  const onClick = useSendEmail()

  return (
    <Button big onClick={onClick}>
      Hire me
    </Button>
  )
}