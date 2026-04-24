export class ShortCurtEntity {
  readonly baseUrl: string
  readonly code: string
  readonly click: number
  readonly createdAt: Date

  constructor(baseUrl: string, code: string, clicks: number, createdAt: Date) {
    this.baseUrl = baseUrl
    this.code = code
    this.click = clicks
    this.createdAt = createdAt
  }

  getBaseUrl() {
    return this.baseUrl
  }
  getClick() {
    return this.click
  }
  getCreatedAt() {
    return this.createdAt
  }
  getCode() {
    return this.code
  }

  validate() {
    if (!this.code) {
      throw new Error('Code is required')
    }
    if (this.code.length > 6) {
      throw new Error('code must be less than 6 characters')
    }
    if (!this.baseUrl) {
      throw new Error('baseUrl is required')
    }
    if (this.click < 0) {
      throw new Error('clicks must be greater than or equal to 0')
    }
    if (!this.createdAt) {
      throw new Error('createdAt is required')
    }
  }

  withClicks(clicks: number) {
    return new ShortCurtEntity(this.baseUrl, this.code, clicks, this.createdAt)
  }
}
