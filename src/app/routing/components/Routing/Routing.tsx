import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

interface RoutingProps {}

export const Routing: FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<div></div>} />
    </Routes>
  )
}