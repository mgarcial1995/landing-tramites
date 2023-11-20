import Navbar from './ui/navbar.js'
import Image from 'next/image'

export default function Home() {
  const certs = [
    { width: 400, height: 400, src:'/certificados/cert1.png', alt: 'Certificado 1' },
    { width: 400, height: 400, src:'/certificados/cert2.png', alt: 'Certificado 2' },
    { width: 400, height: 400, src:'/certificados/cert3.png', alt: 'Certificado 3' },
    { width: 400, height: 400, src:'/certificados/cert4.png', alt: 'Certificado 4' },
  ]
  const workDescription = [
    { width: 250, height: 250, src:'/description/atencion-online.png', alt: 'atencion-online', text: 'SELECCIONE EL SERVICIO QUE DESEA EJECUTAR EN </br> PERÚ' },
    { width: 250, height: 250, src:'/description/documentos-virtuales.png', alt: 'documentos-virtuales', text: 'BRINDE LOS REQUERIMIENTOS NECESARIOS PARA EL </br> SERVICIO' },
    { width: 250, height: 250, src:'/description/documentos-online.png', alt: 'documentos-online', text: 'LOS DOCUMENTOS TRAMITADOS LE LLEGARAN EN EL PLAZO PACTADO' },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='container flex min-h-screen flex-col items-center'>
        <Navbar />
        {/* banner */}
        <div className='w-full flex justify-center items-center'>
          <Image width={1000} height={1000} className='w-full' src="/banner.png" alt='banner' />
        </div>
        {/* certificados */}
        <div className="w-11/12 h-auto bg-[#D9D9D9] py-8">
          <h2 className='font-black tracking-wider	 text-red-600 text-4xl text-center'>CERTIFICADOS</h2>
          <div className='w-full flex justify-around mt-8 items-center px-10'>
            {
              certs.map(cert => {
                return (
                <div key={cert.alt} >
                  <Image 
                  className='w-52'
                  width={cert.width} 
                  height={cert.height} 
                  src={cert.src} 
                  alt={cert.alt} />
                </div>
                )
              })
            }
          </div>
        </div>
        <div className="w-11/12 h-auto py-8">
          <h2 className='font-black tracking-wider text-white text-4xl text-center'>COMO TRABAJAMOS</h2>
          <div className='w-full flex justify-around mt-8 items-center px-10'>
            {
              workDescription.map(desc => {
                return (
                  <div className='w-60 h-auto' key={desc.alt}>
                    <Image
                      width={desc.width} 
                      height={desc.height} 
                      src={desc.src} 
                      alt={desc.alt} 
                    />
                    <p className='text-white text-ml text-center mt-4' dangerouslySetInnerHTML={{ __html: desc.text }}></p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="w-11/12 h-auto py-8">
          <h2 className='font-black tracking-wider text-white text-4xl text-center'>NUESTRAS ÁREAS</h2>
          <div className='w-full flex justify-around mt-8 items-center px-10'>
            
          </div>
        </div>
      </div>
    </main>
  )
}
