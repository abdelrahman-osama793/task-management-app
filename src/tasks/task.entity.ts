/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}

/* 
  - Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique 
    for converting data between incompatible type systems using object-oriented programming languages.
  - ORM (Object Relational Mapper) is the layer that sits between your database and your application.

  - The active record pattern is an approach to accessing data in a database. 
    A database table or view is wrapped into a class. 
    Thus, an object instance is tied to a single row in the table. 
    After creation of an object, a new row is added to the table upon save. 
    Any object loaded gets its information from the database.
    When an object is updated the corresponding row in the table is also updated.
    The wrapper class implements accessor methods or properties for each column in the table or view.

  - A Data Mapper is a Data Access Layer that performs bidirectional transfers of data between a persistent data store 
    (often a relational database) and an in memory data representation (the domain layer). 
    The goal of the pattern is to keep the in memory representation and the persistent data store independent of each other and the data mapper itself. 
    The layer is composed of one or more mappers (or Data Access Objects), performing the data transfer. 
    Mapper implementations vary in scope. 
    Generic mappers will handle many different domain entity types, dedicated mappers will handle one or a few.

  - The big difference between the Active Record style and the Data Mapper style is, 
    the Data Mapper style completely separates your domain from the persistence layer.

  - Active Record vs Data Mapper : https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb
*/
