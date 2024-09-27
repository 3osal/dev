
const ServicesCard = ({icon,title,desc}) => {
  return (
    <div className="bg-background-ALT shadow-lg shadow-shadow px-[20px] py-[20px] rounded-md flex flex-col gap-3 hover:translate-y-[-10px]">
        <span className="text-[50px] text-main-mainColor">
            {icon}
        </span>
        <h1 className="text-[25px] font-bold capitalize">{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default ServicesCard