import UsuarioRowCaja from "./usuarioRowCaja"

function CajaUsuarios() {

    return (
    <>
        <div className='bg-green-800 rounded-xl shadow-md shadow-black w-5/12 h-1/3 m-8 p-3'>
            <h2 className='pl-3'>
                Usuarios del grupo
            </h2>

            <ul className=' col-auto'>

                <UsuarioRowCaja/>
                <UsuarioRowCaja/>
                <UsuarioRowCaja/>
                <UsuarioRowCaja/>
                <UsuarioRowCaja/>

                

            </ul>
        </div>
    </>
  )
}

export default CajaUsuarios