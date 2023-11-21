import Image from "next/image"

export default function Footer() {
    const year=()=>{
        const date = new Date()
        return date.getFullYear()
    }
    return (
        <div className="w-11/12 relative flex h-24 items-center center justify-between items-center">
                <div className="w-auto h-auto">
                    <Image width={200}  height={100}  className="w-36  h-auto" src='/logo.png' alt='logo' />
                </div>
                <div className='text-white font-medium text-xl'>
                    <p> 2011-{year()} | Trámites a Perú. todos los derechos reservados</p>
                </div>
                <div className='flex gap-x-8'>
                    <Image width={50}  height={50}  className="w-auto h-auto" src='/email.png' alt='email' />
                    <Image width={20}  height={50}  className="w-auto h-auto" src='/facebook.png' alt='facebook' />
                </div>
        </div>
    )
}