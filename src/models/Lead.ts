import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript'
import { LeadEntry } from '../services/types'
import { Gender, Status } from '../services/enums'

@Table({
  tableName: 'leads',
  timestamps: true
})
export class Lead extends Model<LeadEntry> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  })
  declare phoneNumber: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  declare email: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare status: Status

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare postalCode: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare dateOfBirth: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare gender: Gender

  @Column({
    type: DataType.JSONB,
    allowNull: false
  })
  declare vehicleData: any

  @CreatedAt
  declare createdAt: Date
}
