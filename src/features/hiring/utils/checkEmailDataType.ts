import { EmailData } from "../types/EmailData"

export function checkEmailDataType(emailData: unknown): emailData is EmailData {
  const typedEmailData = emailData as EmailData

  return (
    Boolean(typedEmailData.to) && 
    Boolean(typedEmailData.subject) && 
    Boolean(typedEmailData.body)
  )
}