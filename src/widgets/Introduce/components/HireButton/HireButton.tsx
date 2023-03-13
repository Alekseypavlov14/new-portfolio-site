import { FC } from 'react'
import { Button } from '@shared/components/Button'

interface HireButtonProps {}

export const HireButton: FC<HireButtonProps> = () => {
  function onClick() {
    // TODO: realize messaging in gmail for hiring
  }

  return (
    <Button big onClick={onClick}>Hire me</Button>
  )
}