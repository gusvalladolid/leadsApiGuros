import { Lead } from '../models/Lead'
import { Status } from '../services/enums'

interface ILeadRepository {
  save: (lead: Lead) => Promise<void>
  updateStatus: (phoneNumber: number, newStatus: Status) => Promise<void>
  delete: (phoneNumber: number) => Promise<void>
  findByPhoneNumber: (phoneNumber: number) => Promise<Lead | undefined>
  findyByEmail: (email: string) => Promise<Lead | undefined>
  getAll: () => Promise<Lead[]>
}

export class LeadRepository implements ILeadRepository {
  async save (lead: Lead): Promise<void> {
    try {
      await Lead.create({
        phoneNumber: lead.phoneNumber,
        email: lead.email,
        name: lead.name,
        status: lead.status,
        postalCode: lead.postalCode,
        dateOfBirth: lead.dateOfBirth,
        gender: lead.gender,
        vehicleData: lead.vehicleData
      })
    } catch (error) {
      throw new Error('Failed to save lead')
    }
  }

  // Chance to Patch
  async updateStatus (phoneNumber: number, newStatus: Status): Promise<void> {
    try {
      const leadToUpdate = await Lead.findByPk(phoneNumber)
      if (leadToUpdate == null) {
        throw new Error('Lead not found')
      }
      leadToUpdate.status = newStatus
      await leadToUpdate.save()
    } catch (error) {
      throw new Error('Failed to update lead status')
    }
  }

  async delete (phoneNumber: number): Promise<void> {
    try {
      const leadToDelete = await Lead.findByPk(phoneNumber)
      if (leadToDelete == null) {
        throw new Error('Lead not found')
      }
      await Lead.destroy({ where: { phoneNumber } })
    } catch (error) {
      throw new Error('Failed to delete lead')
    }
  }

  async findByPhoneNumber (phoneNumber: number): Promise<Lead | undefined> {
    try {
      const lead = await Lead.findByPk(phoneNumber)
      if (lead == null) {
        throw new Error('Lead not found')
      }
      return lead
    } catch (error) {
      throw new Error('Failed to find lead by phoneNumber')
    }
  }

  async findyByEmail (email: string): Promise<Lead | undefined> {
    try {
      const lead = await Lead.findOne({ where: { email } })
      if (lead == null) {
        throw new Error('Lead not found')
      }
      return lead
    } catch (error) {
      throw new Error('Failed to find lead by phoneNumber')
    }
  }

  async getAll (): Promise<Lead[]> {
    try {
      return await Lead.findAll()
    } catch (error) {
      throw new Error('Failed to get all leads')
    }
  }

  async getByStatus (status: Status): Promise<Lead[]> {
    try {
      return await Lead.findAll({ where: { status } })
    } catch (error) {
      throw new Error('Failed to get all status leads')
    }
  }
}
