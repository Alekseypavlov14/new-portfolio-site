import { FC } from 'react'
import { Introduce } from '@widgets/Introduce'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Introduce />
    </>
  )
}