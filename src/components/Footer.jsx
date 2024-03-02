const Footer = () => {
  return (
    <div className="text-center xl:flex pt-10 xl:pb-20 xl:justify-evenly bg-black text-white">
      <a href="/#home" className="font-bold text-2xl xl:pr-10">Shortener</a>
      <div>
        <p className="font-extrabold pt-7 pb-5 xl:pt-0 xl:pb-5">Features</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Link Shortening</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Branded Links</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Analytics</p>  
      </div>
      <div>
        <p className="font-extrabold pt-7 pb-5 xl:pt-0 xl:pb-5">Resources</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Blog</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Developers</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Support</p>  
      </div>
      <div>
        <p className="font-extrabold pt-7 pb-5 xl:pt-0 xl:pb-5">Company</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">About</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Our Team</p>
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Careers</p>  
        <p className="hover:text-cyan-400 cursor-pointer pb-1 text-[14px]">Contact</p>  
      </div>
      <div className="flex justify-center gap-5 py-10 xl:flex xl:gap-5">
        <div><img className="hover:bg-cyan-400 rounded-full  cursor-pointer w-5" src="/icon-facebook.svg" alt="" /></div>
        <div><img className="hover:bg-cyan-400 rounded-full  cursor-pointer w-5" src="/icon-twitter.svg" alt="" /></div>
        <div><img className="hover:bg-cyan-400 rounded-full  cursor-pointer w-5" src="/icon-pinterest.svg" alt="" /></div>
        <div><img className="hover:bg-cyan-400 rounded-full  cursor-pointer w-5" src="/icon-instagram.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default Footer