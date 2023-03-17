import { FC } from 'react'
import { Introduce } from '@widgets/Introduce'
import { ProjectsGallery } from '@widgets/ProjectsGallery'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Introduce />
      <ProjectsGallery />
    </>
  )
}