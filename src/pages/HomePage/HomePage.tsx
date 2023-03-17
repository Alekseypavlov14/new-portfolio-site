import { FC } from 'react'
import { Introduce } from '@widgets/Introduce'
import { ProjectsGallery } from '@widgets/ProjectsGallery'
import { AboutMe } from '@widgets/AboutMe'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Introduce />
      <ProjectsGallery />
      <AboutMe />
    </>
  )
}