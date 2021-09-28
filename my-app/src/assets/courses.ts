import { Card } from '../app/types/inerfaces';

export const COURSES: Card[] = [
  {
    title: 'Clean code',
    creation_date: '01.02.2021',
    duration: 100,
    course_description:'The primary goal of Clean Code course is to provide theoretical knowledge and train practical skills on all aspects of code that follows good programming fundamentals and is easy to understand when we look back at it at later.',
    list_authors:['Nikolay', 'Sergey'],
    edit: false
  },
  {
    title: 'Cloud Foundations',
    creation_date: '01.03.2021',
    duration: 120,
    course_description:'The Cloud Foundations for Tech course will help you explore cloud services that EPAM provides, operate cloud-related terminology, and become confident when working with cloud technologies',
    list_authors:['Boris', 'Anna'],
    edit: true
  },
  {
    title: 'JavaScript',
    creation_date: '01.01.2020',
    duration: 180,
    course_description:'Once seen as optional, JavaScript is now becoming an integral part of the web, infusing every layer with its script.',
    list_authors:['Roben Shon'],
    edit: false
  }
]

