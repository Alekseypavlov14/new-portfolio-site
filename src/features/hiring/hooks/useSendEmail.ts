import { checkEmailDataType } from '../utils/checkEmailDataType'
import { createEmail } from './../utils/createEmail'
import emailData from './../data/emailData.json'
 
export function useSendEmail() {
  return () => {
    if (!checkEmailDataType(emailData)) return

    const email = createEmail(emailData)
    
    window.location.href = email
  }
}
