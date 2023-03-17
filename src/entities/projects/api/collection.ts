import { PROJECTS_COLLECTION_PATH } from '../const'
import { converter, db } from '@shared/api/firebase'
import { ProjectEntity } from '../project.entity'
import { collection } from 'firebase/firestore'

export const PROJECTS_COLLECTION = collection(db, PROJECTS_COLLECTION_PATH)
  .withConverter(converter<ProjectEntity>())