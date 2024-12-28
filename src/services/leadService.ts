import { LeadEntry } from './types'
import leadsData from './leads.json'

const leads: LeadEntry[] = leadsData as LeadEntry[]

export const getLeads = (): LeadEntry[] => leads

export const findLeadById = (id: number): LeadEntry | undefined => {
  return leads.find(lead => lead.phoneNumber === id)
}

export const addLead = (newDiaryEntry: LeadEntry): LeadEntry => {
  const newLead: LeadEntry = {
    ...newDiaryEntry
  }
  leads.push(newLead)
  return newLead
}
