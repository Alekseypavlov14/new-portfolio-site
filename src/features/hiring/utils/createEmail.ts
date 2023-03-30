import { EmailData } from "../types/EmailData"

export function createEmail(emailData: EmailData) {
  return `mailto:${emailData.to}?body=${emailData.body}&subject=${emailData.subject}`
}