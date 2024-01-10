import Link from 'next/link';
export default function Navbar(props) {
    const { listNavbarItems } = props
    return (
        <div className="w-full relative flex flex-col h-24 items-center center">
            <div className="absolute z-10 w-[99%] h-24 bg-[#1E1E1E] flex justify-between items-center px-24">
                <div className="w-14 h-auto">
                    <img className="w-full h-auto" src='/isotipo.png' alt='logo' />
                </div>
                <div className={`flex text-white font-medium `}>
                    {
                        listNavbarItems.map((item,i) => {
                            return (
                                <Link key={item.label} 
                                href={item.src}
                                className='w-32 text-center text-white hover:text-red-600 mx-4 p-4 hover:underline hover:underline-offset-8 decoration-2'>
                                    <p> {item.label.toUpperCase()}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="absolute z-0 bottom-0 -mb-2 w-full h-4 bg-red-600"></div>
        </div>
    )
}