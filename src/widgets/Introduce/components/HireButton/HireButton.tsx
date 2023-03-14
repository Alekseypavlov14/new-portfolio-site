import { FC } from 'react'
import { Button } from '@shared/components/Button'

interface HireButtonProps {}

export const HireButton: FC<HireButtonProps> = () => {
  function onClick() {}

  return (
    <Button big onClick={onClick}>Hire me</Button>
  )
}