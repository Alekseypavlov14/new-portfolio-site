import { useNavigate } from "react-router-dom"

export function useNavigation() {
  const navigate = useNavigate()

  return {
    navigateHomePage: () => navigate('/'),
    navigateProjectsPage: () => navigate('/projects'),
    navigateContactsPage: () => navigate('/contacts')
  }
}