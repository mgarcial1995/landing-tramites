
export default function FloatNavbar() {
    const listNavbarPrincipal = [
        {label: "Servicios", src: "#", active: false},
        {label: "Opiniones", src: "#", active: false},
        {label: "Contacto", src: "#", active: false},
    ]
    return (
        <div className={`floatNavbar ${isScrolled ? 'scrolled' : ''} w-full fixed top-0 left-0 flex flex-col h-24 items-center center z-50`}>
            <div className="absolute z-10 w-full h-24 bg-[#1E1E1E] flex justify-between items-center px-24">
                {/* isotipo */}
                <div className="w-14 h-auto">
                    <img className="w-full h-auto" src='/isotipo.png' alt='logo' />
                </div>
                {/* Navegador */}
                <div className={`flex text-white font-medium `}>
                    {
                        listNavbarPrincipal.map(item => {
                            return (
                                <p className='mx-10 p-4' key={item.label}> {item.label.toUpperCase()}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="absolute z-0 bottom-0 -mb-2 w-full h-4 bg-red-600"></div>
        </div>
    )
}