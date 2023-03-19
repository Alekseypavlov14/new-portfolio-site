export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/[^+0-9]/g, '')
}