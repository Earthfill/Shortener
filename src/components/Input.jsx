const Input = () => {
  return (
    <div className="relative w-11/12 pl-7 xl:top-0 xl:w-3/4 xl:left-40 xl:-mt-20">
      <div className="p-6 xl:flex bg-[url('/uuunion.svg')] bg-no-repeat bg-cover rounded-lg xl:p-12">
        <form className="flex flex-col gap-3 xl:flex-row xl:gap-3 w-full xl:justify-center" action="">
          <input placeholder="Shorten a link here.." className="rounded-lg w-full p-2 xl:pl-5 xl:w-3/4" />
          <button className="bg-cyan-400 rounded-lg w-full xl:w-fit p-2 xl:px-7 font-bold text-white">Shorten it!</button>
        </form>
      </div>
    </div>
  )
}

export default Input