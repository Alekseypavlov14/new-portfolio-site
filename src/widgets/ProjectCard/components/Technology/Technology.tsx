import { FC } from 'react'
import { setTechnologiesSelector, useFilterStore } from '@app/store'
import { useNavigation } from '@app/navigation'
import { Badge } from '@shared/components/Badge'

interface TechnologyProps {
  technology: string
}

export const Technology: FC<TechnologyProps> = ({ technology }) => {
  const setTechnologies = useFilterStore(setTechnologiesSelector)
  const { navigateProjectsPage } = useNavigation()

  function clickHandler() {
    setTechnologies([technology])
    navigateProjectsPage()
  }

  return (
    <div onClick={clickHandler}>
      <Badge>{technology}</Badge>
    </div>
  )
}