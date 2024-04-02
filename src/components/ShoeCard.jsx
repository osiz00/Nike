const ShoeCard = ({currentHeroImg,imgURL,  changeBigShowImage, bigShoeImg}) => {

  return (
    <div onClick={() => changeBigShowImage(bigShoeImg)} 
    className={` w-full h-full flex justify-center items-center
     border-2 rounded-xl ${bigShoeImg === currentHeroImg 
    ?  'border-coral-red'
    : 'cursor-pointer max-sm:flex-1'
    }`}>
        <img 
         src={imgURL}
         alt="shoes collection"
         width={127}
         height={103}
         className="object-contain"
         />
    </div>
  )
}

export default ShoeCard
