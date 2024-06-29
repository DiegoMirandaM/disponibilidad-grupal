import GenerarCalendario from "./../utils/calendario"

function calendario() {
    const diasCabecera = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

    const diasCalendario = GenerarCalendario();
    

  return (
    <>
    
    <div className=" w-fit bg-slate-800">
        <div className="inline-flex">
            {diasCabecera.map((el, idx) => {
                return (
                    <h1 key={idx} className=" text-slate-300 w-16 px-4 py-4 border border-black font-medium">{el}</h1>
                )
            })}
        </div>

        <div className=" grid grid-cols-7 w-full">
            {diasCalendario.map(({fecha, mesActual, esHoy}, idx) => {
                return (
                    <h1 key={idx} className={` 
                        ${mesActual ? 'text-slate-300' : 'text-slate-600'} 
                        ${esHoy ? 'text-red-700' : 'text-slate-300'} 
                        hover:bg-slate-400 hover:text-slate-800 hover:cursor-pointer
                        rounded-full text-center px-4 py-4 transition-all font-medium`}>{fecha.date()}</h1>
                )
            })}
        </div>
    </div>

    </>
  )
}

export default calendario