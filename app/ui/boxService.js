import {useState} from 'react'
import Image from 'next/image'


export default function BoxService(props) {
    const {setShowBoxService, listSelectArea} = props
//     id
// group
// img
// alt
// nameService
// description
// serviceExtra
// requirements
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
        <div className="fixed z-50 bg-principal text-white rounded-xl p-4 w-8/12 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-white flex">
            <div className="w-2/6 flex flex-col justify-center h-auto">
                {
                    listServices.map((service, index) => {
                        return <p key={service.nameService}
                            onClick={()=>changeService(index)}
                            className={`text-xl font-black tracking-wide p-2 text-right cursor-pointer hover:bg-red-600 ${service.active ? 'bg-red-600': ''} `}>
                            {service.nameService.toUpperCase()}
                        </p>
                    })
                }
            </div>
            
            <div className="relative flex w-1 h-max bg-white "></div>
            {
                <div className=" w-4/6 h-auto py-12 px-8 font-light text-textDescription" >
                    <div className='w-full h-auto flex justify-center mb-8 '>
                        <Image width={400} height={400} className='w-72' src={serviceSelected.img} alt={serviceSelected.alt} />
                    </div>
                
                    <p className=' '>{serviceSelected.description}</p>
                    <p className='font-medium mt-4'>Requerimientos</p>
                    <ul className='list-disc ml-12'>
                        {
                            serviceSelected.requirements.map(req => {
                                return <li key={req}> {req} </li>
                            })
                        }
                    </ul>
                    <div className='w-full h-auto flex justify-center'>
                        <div className='text-lg text-white bg-red-600 p-2 rounded-lg w-48 font-bold text-center mt-4'>EMPEZAR AQUI</div>
                    </div>
                </div>
            }
            
            <div onClick={()=>setShowBoxService(false)} className="absolute top-4 right-4 text-center rounded-full bg-red-600 w-8 h-8 flex justify-center items-center font-medium cursor-pointer">X</div>
        </div>
    )
}