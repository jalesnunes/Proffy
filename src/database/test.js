const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    //inserir dados

    proffyValue = {
        name: 'Jales nunes',
        avatar: 'https://avatars1.githubusercontent.com/u/42074619?s=460&u=60413f4b854365b9b7ae03d3462cec4ee629af74&v=4',
        whatsapp: '999999999',
        bio: 'instrutor de Educacao Fisica'
    }

    classValue = {
        subject: 1,
        cost: '20',
        //o proffy vira pelo banco de dados
    }

    classScheduleValues = [
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por excem,plo e das 8 - 18
    // o horario do time_from (8) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420" 
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)
})
