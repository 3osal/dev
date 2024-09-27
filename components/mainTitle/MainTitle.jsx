
const MainTitle = ({title , desc}) => {
  return (
    <div className="w-max mb-10 mx-auto flex flex-col gap-2 items-center">
        <h1 className="text-[25px] capitalize text-main-mainColor">{title}</h1>
        <h3 className="text-[25px] font-bold md:text-[50px] capitalize">{desc}</h3>
    </div>
  )
}

export default MainTitle