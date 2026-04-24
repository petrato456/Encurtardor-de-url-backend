import { randomBytes } from 'node:crypto'

const ALPHABET =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function generateShortCutCode(length = 6): string {
  const bytes = randomBytes(length)
  let code = ''

  for (let i = 0; i < length; i++) {
    code += ALPHABET[bytes[i] % ALPHABET.length]
  }

  return code
}
