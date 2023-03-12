import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@app/layout'

interface RoutingProps {}

export const Routing: FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<></>} />
        <Route path='/projects' element={<></>} />
        <Route path='/contacts' element={<></>} />
      </Route>
    </Routes>
  )
}