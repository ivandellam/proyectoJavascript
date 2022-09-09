let option;
const days = [
    'Lunes',
    'Martes',
    'miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'g
];

const states = [
    'Pendiente',
    'En proceso',
    'Realizada'

];

const tasks =[ 
    {
    
    id: 1,
    state: "Pendiente",
    day: "lunes",
    task: "correr",
},
    { 
    
    id: 2,
    state: "Pendiente",
    day: "martes",
    task: "Pasear al perro"
},
    { 
    
    id: 3,
    state: "Pendiente",
    day: "Miercoles",
    task: "Entrenar"
},
    { 
    
    id: 4,
    state: "Pendiente",
    day: "Jueves",
    task: "Salir a comer"
},
{ 
    
    id: 5,
    state: "Pendiente",
    day: "Viernes",
    task: "Reunion de trabajo"
},
{ 
    
    id: 6,
    state: "Echo!",
    day: "Sabado",
    task: "Juntarse con amigos"
},
{ 
    
    id: 7,
    state: "Pendiente",
    day: "Domingo",
    task: "Momento de ocio! no hay tareas agendadas"
},

];



while(option !== 3 ) {
option = Number(prompt('Seleccione una opcion:\n1. Crear Tarea\n2. Consultar Tareas\n3. Salir'));

    switch (option) {
        case 1:
                const day = Number(prompt('Ingrese un dia de la semana:\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes\n 6. Sabado\n 7. Domingo'));
                const task = prompt('Ingrese una tarea');
                const state = Number(prompt('Ingrese el estado de la nueva tarea:\n 1. Pendiente\n 2. En proceso\n 3. Realizado'));
                const id = getLastId () + 1 ;
                newTask(id, state, day, task);
            break;
                

            
        case 2:
                getAlltasks();
            break;
        case 3:
                alert('Nos vemos luego')
            break;
        default:
                alert('La opcion no es correcta')

            break;
    }
}

function newTask(id, state, day, task) {
    tasks.push ({
        id,
        day,
        task,
        state: states [state - 1],
    });
    
} 

function getAlltasks() {
    tasks.forEach((task) => console.log(task.id + ' - ' +  days[task.day -1] + ' - ' + task.task + ' - ' + task.state));
    }

function getLastId() {
    return tasks.length;
};

