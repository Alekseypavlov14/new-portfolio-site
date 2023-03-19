import { useScrollOnNavigate } from './useScrollOnNavigate'
import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()
  useScrollOnNavigate()

  return {
    navigateHomePage: () => navigate('/'),
    navigateProjectsPage: () => navigate('/projects'),
    navigateContactsPage: () => navigate('/contacts')
  }
}