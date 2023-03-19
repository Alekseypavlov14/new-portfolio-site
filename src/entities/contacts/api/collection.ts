import { CONTACTS_COLLECTION_PATH } from './../const'
import { converter, db } from '@shared/api/firebase'
import { ContactEntity } from '../contact.entity'
import { collection } from 'firebase/firestore'

export const CONTACTS_COLLECTION = collection(db, CONTACTS_COLLECTION_PATH)
  .withConverter(converter<ContactEntity>())