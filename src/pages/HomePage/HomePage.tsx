import { FC } from 'react'
import { Introduce } from './components/Introduce'
import { Projects } from './components/Projects'
import { AboutMe } from './components/AboutMe'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Introduce />
      <Projects />
      <AboutMe />
    </>
  )
}