
const Button = ({label, iconURL, isOutlined, addedStyles}) => {
  let primary = ' border-coral-red text-white  bg-coral-red'
  let outlined = 'border-slate-gray bg-white text-slate-gray'
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat 
    text-lg leading-none ${addedStyles ? addedStyles : ""}
    rounded-full ${isOutlined ? outlined : primary}`}>
        {label}
        {iconURL && <img 
        src={iconURL}
        alt={label}
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  
  )
}

export default Button
