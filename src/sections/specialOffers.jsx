import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


function SpecialOffers() {
  return (
    <section className="flex justify-wrap
    items-center flex-col-reverse md:flex-row max-container gap-10">
      <div className="">
            <img src={offer} 
            width={773}
            height={687}  alt="offer"
            className="object-contain w-full" />
        </div>
      <div className="md:w-2/3">
      <h2 className="font-bold 
      text-[40px]"><span className="text-coral-red">Special</span> Offer</h2>
      <p className="info-text mt-5">Lorem ipsum, dolor sit
         amet consectetur adipisicing elit. 
        quos voluptates accusantium magni porro!</p>
      <p className="info-text mt-5">Lorem ipsum, dolor sit
         amet consectetur adipisicing elit. 
         Quam magni maiores a iure veniam porro 
        quos 
         amet consectetur adipisicing elit. 
         Quam magni maioresorro!</p>
        <div className="flex gap-5 mt-10">
            <Button label='Shop now' iconURL={arrowRight} />
            <Button label='Learn more' isOutlined={true} />
        </div>
        </div>
        
    </section>
  )
}

export default SpecialOffers
