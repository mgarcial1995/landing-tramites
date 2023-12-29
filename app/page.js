"use client";
import { useState, useEffect } from 'react'
import { certs, workDescription, areas, services } from './constants/constants.js'

import FloatNavbar from './ui/floatNavbar.js'
import BoxService from './ui/boxService.js'
import Navbar from './ui/navbar.js'
import Footer from './ui/footer.js'
import Image from 'next/image'

const listNavbar = [
  {label: "Servicios", src: "#", active: false },
  {label: "Opiniones", src: "#", active: false },
  {label: "Contacto", src: "#", active: false },
]

export default function Home() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showFloatNavbar, setShowFloatNavbar] = useState(false);
  const [showBoxService, setShowBoxService] = useState(false);
  const [listNavbarPrincipal, setListNavbarPrincipal] = useState(listNavbar);

  const [listSelectArea, setListSelectArea] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowFloatNavbar(currentScrollPos > 100 && currentScrollPos !==  0);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, [prevScrollPos]);

  const selectAreaServices = (area) => {
    const selectArea = services.filter(el => el.group === area)
    const transformArea = selectArea.map((el, i) => {
      if(i===0) {el.active = true}
      else{ el.active = false}
      return el
    })
    setListSelectArea(transformArea)
    // console.log(transformArea)
    setShowBoxService(true)
  }

  return (
    <main className="w-full h-auto flex flex-col items-center">
      {
        showFloatNavbar && <FloatNavbar />
      }
      { showBoxService && <BoxService setShowBoxService={setShowBoxService} listSelectArea={listSelectArea} />}
      <div className='container flex min-h-screen flex-col items-center'>
        <Navbar listNavbarItems={listNavbarPrincipal} />
        <div className='w-full flex justify-center items-center'>
          <Image width={1000} height={1000} className='w-full' src="/banner.png" alt='banner' />
        </div>
        <div className="w-full h-auto bg-[#D9D9D9] py-8 ">
          <h2 className='font-black tracking-wider text-red-600 text-4xl text-center'>CERTIFICADOS</h2>
          <div className='w-full flex justify-between mt-8 items-center px-10'>
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
        <div className="w-11/12 h-auto py-8 my-10">
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
        <div className="w-11/12 h-auto py-8mt-8">
          <h2 className='font-black tracking-wider text-white text-4xl text-center'>NUESTRAS ÁREAS</h2>
          <div className='w-full flex flex-wrap justify-between mt-8 items-center px-10'>
            {
              areas.map(area => {
                return (
                  <div onClick={()=>selectAreaServices(area.id)} className='relative w-44 h-44 m-24 cursor-pointer' key={area.alt}>
                    <Image
                      className='absolute w-full h-auto'
                      width={area.width} 
                      height={area.height} 
                      src={area.src} 
                      alt={area.alt} 
                    />
                    <h2 className='text-white text-2xl font-black text-center absolute top-1/2 left-1/2 -translate-x-1/2 -trasnlate-y-1/2'
                     dangerouslySetInnerHTML={{ __html: area.text }}></h2>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="w-full h-2 bg-red-600"></div>
        <Footer />
      </div>
    </main>
  )
}