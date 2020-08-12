const db = require('./db')
const createProffy = require('./createProffy')

db.then(() =>{
    //inserir dados

    proffyValue = {
        name: 'Jales nunes',
        avatar: 'https://avatars1.githubusercontent.com/u/42074619?s=460&u=60413f4b854365b9b7ae03d3462cec4ee629af74&v=4',
        whatsapp: '999999999',
        bio: 'instrutor de Educacao Fisica'
    }

    classValue = {
        subject: 'Quimica',
        cost: '20',
        //o proffy vira pelo banco de dados
    }

    classScheduleValue = [
        //class_id vira pelo banco de dados apos cadastramos a class
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
            }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})
    //consultar os dados inseridos
})
