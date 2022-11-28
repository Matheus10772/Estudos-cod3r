const schedule = require('node-schedule');

// Executar tarefa da função de tempos em tempos***************

const tarefa1 = schedule.scheduleJob('*/2 * * * * *', () => {
    console.log("Teste do jobSchedule 1, no segundo", (new Date()).getSeconds());
});

//*********************************************************/

setTimeout(() => {
    tarefa1.cancel();
}, 20000);

//Recorrência de execução do agendamento

const regrasDoAgendamento = new schedule.RecurrenceRule();
regrasDoAgendamento.dayOfWeek = [new schedule.Range(1, 5)];
regrasDoAgendamento.hour = 17;
regrasDoAgendamento.second = 30;

const tarefa2 = schedule.scheduleJob(regrasDoAgendamento, () => {
    console.log('Executando tarefa2');
});