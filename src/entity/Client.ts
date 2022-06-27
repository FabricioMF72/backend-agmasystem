import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    ClientID: number

    @Column({nullable: false })
    FirstName: string

    @Column({nullable: false })
    LastName: string

    @Column({nullable: false })
    IdentificationID: number

    @Column({nullable: false })
    Gender: string

    @Column({ type: 'date' })
    Birthdate: string

    @Column({nullable: false })
    Email: string

    @Column({nullable: false })
    PhoneNumber: string

    @Column({nullable: true })
    FirstEmergencyNumber: string

    @Column({nullable: true })
    SecondEmergencyNumber: string
    
    @Column({nullable: true })
    Address: string

    @Column({nullable: false })
    ZipCode: number

}
