import {useState} from 'react'
import Image from 'next/image'


export default function BoxService(props) {
    const {setShowBoxService, listSelectArea} = props

    const [phoneNumber] = useState("+51986587988");
    const [message] = useState("Hola, quiero más información sobre ");
    const handleWhatsAppClick = (name) => {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message+name)}`;
      window.open(whatsappUrl, '_blank');
    };

    const [listServices, setListServices] = useState(listSelectArea)
    const [serviceSelected, setServiceSelected] = useState(listServices[0])

    const changeService = (i) => {
        const list=[...listServices]
        const newlist = list.map((el,index) => {
            if(index === i) {
                el.active = true
            }else {
                el.active = false
            }
            return el
        })
        setListServices(newlist)
        setServiceSelected(listServices[i])
    }

    return (
        <div className="bg-principal text-white p-0 md:p-4 w-full h-auto flex flex-col items-center">
            <div onClick={()=>setShowBoxService(false)} className="text-center text-xl font-medium rounded-full bg-red-600 w-12 h-12 flex justify-center hover:text-red-600 hover:bg-white items-center font-medium cursor-pointer">X</div>
            
            <div className='w-full h-auto flex flex-col md:flex-row'>

                <div className="w-full md:w-2/6 flex flex-col justify-center h-auto">
                    {
                        listServices.map((service, index) => {
                            return <p key={service.nameService}
                                onClick={()=>changeService(index)}
                                className={`text-center text-lg md:text-xl my-2 font-black tracking-wide p-2 md:text-right cursor-pointer hover:bg-red-600 ${service.active ? 'bg-red-600': ''} `}>
                                {service.nameService.toUpperCase()}
                            </p>
                        })
                    }
                </div>
                
                <div className="relative flex w-1 h-max bg-white "></div>
                
                <div className="w-full md:w-4/6 h-auto py-4 md:py-12 p-0 md:px-8 font-light text-textDescription text-justify" >
                    <div className='hidden md:block w-full h-auto flex justify-center mb-8 '>
                        <Image width={400} height={400} className='w-72' src={serviceSelected.img} alt={serviceSelected.alt} />
                    </div>
                
                    <p>{serviceSelected.description}</p>
                    <p className='font-medium mt-4'>Requerimientos</p>
                    <ul className='list-disc ml-4 md:ml-8 mt-2'>
                        {
                            serviceSelected.requirements.map(req => {
                                return <li key={req}> {req} </li>
                            })
                        }
                    </ul>
                    <div className='w-full h-auto flex justify-center mt-4'>
                        <div onClick={()=>handleWhatsAppClick(serviceSelected.nameService)} className='text-lg text-white bg-red-600 p-2 rounded-lg w-48 font-bold text-center mt-4 cursor-pointer'>EMPEZAR AQUI</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}