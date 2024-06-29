import dayjs from 'dayjs';

const GenerarCalendario = (
    mes = dayjs().month(), 
    anio = dayjs().year()
) => {
    
    const primerDiaMes = dayjs().year(anio).month(mes).startOf("month");
    const ultimoDiaMes = dayjs().year(anio).month(mes).endOf("month");
    
    const arrayFechas = [];

    // Fechas anteriores
    for(let i = 1; i < primerDiaMes.day(); i++){
        arrayFechas.push(
            {
                fecha: primerDiaMes.day(i), 
                mesActual: false,
                esHoy: false
            });
    }



    // Agregar fechas del mes actual
    for(let i = primerDiaMes.date(); i <= ultimoDiaMes.date(); i++){
        arrayFechas.push(
            {
                fecha: primerDiaMes.date(i), 
                mesActual: true,
                esHoy: dayjs().isSame(primerDiaMes.date(i), 'day')
        });
    }

    const restante = 42 - arrayFechas.length;

    // Agregar fechas del mes siguiente
    for(let i = ultimoDiaMes.date() + 1; i <= ultimoDiaMes.date() + restante; i++){
        arrayFechas.push(
            {
                fecha: primerDiaMes.date(i),
                mesActual: false,
                esHoy: false
        });
    }

    return arrayFechas;
}

export default GenerarCalendario; 