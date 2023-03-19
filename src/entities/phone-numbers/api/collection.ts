import { PHONE_NUMBERS_COLLECTION_PATH } from './../const'
import { PhoneNumberEntity } from '../phone-number.entity'
import { converter, db } from '@shared/api/firebase'
import { collection } from 'firebase/firestore'

export const PHONE_NUMBERS_COLLECTION = collection(db, PHONE_NUMBERS_COLLECTION_PATH)
  .withConverter(converter<PhoneNumberEntity>())