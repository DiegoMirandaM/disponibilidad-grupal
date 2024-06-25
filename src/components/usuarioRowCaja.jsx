

function UsuarioRowCaja() {
  return (
    <>
    <li className='p-3 hover:bg-cyan-600'>

        <img
            src="/images/usuarioDefault.png" 
            alt="Imagen del usuario" 
            className='max-w-16 inline-block'/>
        <h3 className='inline-block mx-3'>
            Usuario 1
        </h3>

    <div className="gap-2 inline-block">
        <input type="checkbox" name="" id="" className='appearance-none inline-block 
        w-8 h-8 border-2 rounded-md align-middle border-blue-500 bg-white shrink-0
checked:bg-blue-800 checked:border-0'/>
        <svg
            className="
                absolute w-8 h-8 mt-1 text-zinc-400 hidden peer-checked:inline-block 
                pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
    </li>
    </>
  )
}

export default UsuarioRowCaja