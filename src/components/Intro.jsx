const Intro = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-center pt-8 pb-16 pl-5 xl:flex-row xl:justify-center xl:px-10 xl:py-28">
        <div className="text-center px-10 xl:text-left xl:basis-1/2 xl:px-12 xl:pt-5">
          <h1 className="font-extrabold text-3xl pt-7 xl:text-5xl xl:pt-3">More than just shorter links</h1>
          <p className="text-slate-500 pt-3 xl:pt-1">Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
          <button className="cursor-pointer px-8 py-2 mt-6 font-semibold bg-cyan-400 text-white rounded-full xl:mt-5 xl:px-6 xl:py-2">Get Started</button>
        </div>
        <img className="xl:basis-1/3 xl:w-400" src="/illustration-working.svg" alt="" />
      </div>
    </div>
  )
}

export default Intro;