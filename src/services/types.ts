import { Status, Gender } from './enums'

export interface VehicleData {
  brand: string
  model: string
  year: number
}

export interface LeadEntry {
  phoneNumber: number
  email: string
  name: string
  status: Status
  postalCode: number
  dateOfBirth: string
  gender: Gender
  vehicleData: VehicleData
}
