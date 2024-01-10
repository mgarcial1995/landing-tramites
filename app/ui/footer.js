import Image from "next/image"

export default function Footer() {
    const year=()=>{
        const date = new Date()
        return date.getFullYear()
    }
    return (
        <div className="flex flex-col w-full text-center gap-y-4 py-8 px-2 md:flex-row md:w-11/12 relative h-auto items-center center justify-between items-center">
            <div className="w-auto h-auto">
                <Image width={200}  height={100}  className="w-36  h-auto" src='/logo.png' alt='logo' />
            </div>
            <div className='text-white font-medium text-xl'>
                <p> 2011-{year()} | Trámites a Perú. todos los derechos reservados</p>
            </div>
            <div className='flex gap-x-8'>
                {/* <Image width={100}  height={100}  className="w-8 h-8" src='/email.png' alt='email' /> */}
                <a target="_blank" href="https://www.facebook.com/abogadaperuanos">
                    <Image width={100}  height={100}  className="w-8 h-8" src='/facebook.png' alt='facebook' />
                </a>
            </div>
        </div>
    )
}