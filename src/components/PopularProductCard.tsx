import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}: any) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src ={imgURL} alt={name} className="w-[280] h-[280]"/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src ={star} alt="rating" width={24} height={24} /> 
        <p className="font-montserrat leading-normal text-xl text-slate-gray ">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
      <p className="mt-2 text-lg leading-normal font-palanquin font-semibold text-coral-red">{price} </p>
    </div>
  )
}

export default PopularProductCard