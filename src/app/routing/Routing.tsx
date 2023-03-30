import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProjectsPage } from '@pages/ProjectsPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { HomePage } from '@pages/HomePage'
import { Layout } from '@app/layout'

interface RoutingProps {}

export const Routing: FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}