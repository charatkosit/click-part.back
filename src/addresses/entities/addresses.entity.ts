import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Addresses')
export class Addresses {
    @PrimaryGeneratedColumn() 
    Id:         number;

    @Column ()
    Name_recipient :      string;

    @Column ()
    Line1:      string;

    @Column ()
    Line2:      string; 

    @Column ()
    City:       string; 

    @Column ()
    State:      string; 

    @Column ()
    Street:     string; 

    @Column ()  
    Country:    string; 

    @Column ()
    Phone:      string; 

    @Column ()
    Pincode:    string; 

    @Column ()
    User_Id:    string; 

}
