import { PHONE_NUMBERS_COLLECTION } from './collection'
import { PhoneNumberEntity } from '../phone-number.entity'
import { getDocs } from "firebase/firestore"

export async function fetchPhoneNumbers(): Promise<PhoneNumberEntity[]> {
  const phoneNumbersDocs = await getDocs<PhoneNumberEntity>(PHONE_NUMBERS_COLLECTION)
  const phoneNumbers = phoneNumbersDocs.docs.map(doc => doc.data())
  return phoneNumbers
}