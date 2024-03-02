const Cards = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-20 xl:flex-row xl:z-10 xl:gap-7 xl:justify-center xl:py-20">
        <div className="text-center px-5 w-72 mt-20 rounded-lg bg-white xl:mt-0 xl:w-1/4 xl:h-80 xl:px-10 xl:rounded-2xl">
          <div className="inline-block -mt-10 bg-indigo-950 rounded-full w-20 p-5 xl:w-20 xl:p-6">
            <img src="/icon-brand-recognition.svg" alt="" />
          </div>
          <h3 className="text-lg pt-7 xl:pt-10 xl:text-2xl font-extrabold text-center">Brand Recognition</h3>
          <p className="text-sm xl:text-base text-slate-500 px-1 pt-3 pb-12 xl:px-0 xl:pb-0 xl:pt-5">Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help unstil confidence in your content.</p>
        </div>

        <div className="text-center px-5 w-72 rounded-lg bg-white xl:w-1/4 xl:h-80 xl:px-10 xl:rounded-2xl xl:mt-16">
          <div className="inline-block -mt-10 bg-indigo-950 rounded-full w-20 p-5 xl:w-20 xl:p-6 xl:-mt-10">
            <img src="/icon-detailed-records.svg" alt="" />
          </div>
          <h3 className="text-lg pt-7 xl:pt-10 xl:text-2xl font-extrabold text-center">Detailed Records</h3>
          <p className="text-sm xl:text-base text-slate-500 px-1 pt-3 pb-12 xl:px-0 xl:pb-0 xl:pt-5">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>

        <div className="text-center px-5 w-72 mb-20 rounded-lg bg-white xl:w-1/4 xl:h-80 xl:px-10 xl:rounded-2xl xl:mb-0 xl:mt-36">
          <div className="inline-block -mt-10 bg-indigo-950 rounded-full w-20 p-5 xl:w-20 xl:p-6 xl:-mt-10">
            <img src="/icon-fully-customizable.svg" alt="" />
          </div>
          <h3 className="text-lg pt-7 xl:pt-10 xl:text-2xl font-extrabold text-center">Fully Customizable</h3>
          <p className="text-sm xl:text-base text-slate-500 px-1 pt-3 pb-12 xl:px-0 xl:pb-0 xl:pt-5">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards