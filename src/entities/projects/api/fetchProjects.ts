import { PROJECTS_COLLECTION } from './collection'
import { ProjectEntity } from '../project.entity'
import { getDocs } from 'firebase/firestore'

export async function fetchProjects() {
  const projectDocs = await getDocs<ProjectEntity>(PROJECTS_COLLECTION)
  const projects = projectDocs.docs.map(doc => doc.data())
  return projects
}