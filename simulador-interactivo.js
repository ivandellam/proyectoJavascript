
let acumuladorIngresos = 0;
let acumuladorGastos = 0;

function saldo(ingresos,gastos){
    return ingresos - gastos;
}


// CARGA DE INGRESOS DEL USUARIO

for(let i=1; i<11; i++){
    alert("Describa el ingreso n° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea salir sin colocar más nada, escriba " +"ESC");
    conceptoIngreso = conceptoIngreso.toUpperCase();

    if (conceptoIngreso != "ESC"){
        let montoIngreso = prompt("Monto del ingreso:");
        acumuladorIngresos = acumuladorIngresos + parseInt(montoIngreso);

        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0){
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)){
                acumuladorIngresos = acumuladorIngresos + parseInt(montoIngreso);
                break;
            }
        }
    }
    else{
        break;
    }
}

// CARGA DE GASTOS DEL USUARIO

for(let i=1; i<11; i++){
    alert("Describa el gasto n° " + i)
    let conceptoGasto = prompt("Concepto del gasto. Si desea salir sin colocar más nada, escriba " +"ESC");
    conceptoGasto = conceptoGasto.toUpperCase();

    if (conceptoGasto != "ESC"){
        let montoGasto = prompt("Monto del gasto:");
        acumuladorGastos = acumuladorGastos + parseInt(montoGasto);

        while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0){
            alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
            montoGasto = prompt("Coloque nuevamente el monto del gasto:");
            if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)){
                acumuladorGastos = acumuladorGastos + parseInt(montoGasto);
                break;
            }
        }
    }
    else{
        break;
    }
}



// MUESTRA DE SALDOS

alert(
    "Tienes un total de ingresos por la cantidad de: $" + acumuladorIngresos +"\n"+
    "Tus gastos de este mes, suman: $" +acumuladorGastos +"\n"+
    "Por lo tanto, tu saldo disponible, es de: $" + saldo(acumuladorIngresos,acumuladorGastos));