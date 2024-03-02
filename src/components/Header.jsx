import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    // Cleanup function to reset overflowY when component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [toggleMenu]);

  return (
    <nav className="xl:flex xl:justify-evenly xl:align-bottom">
      <div className="xl:flex">
        <a className="cursor-pointer font-bold text-2xl pl-5 xl:pr-10">Shortener</a>
        <span className="xl:hidden inline-block absolute right-7 pt-2" onClick={() => setToggleMenu(!toggleMenu)}><AiOutlineMenu /></span>
        <div className="hidden xl:flex xl:basis-3/4 xl:items-center xl:justify-start xl:gap-16">
          <a className="cursor-pointer">Features</a>
          <a className="cursor-pointer">Pricing</a>
          <a className="cursor-pointer">Resources</a>
        </div>
        {toggleMenu ? (
          <div className="fixed w-full py-10 mt-5 font-extrabold bg-indigo-950 rounded-xl text-white xl:text-indigo-950 flex flex-col items-center gap-7 xl:flex xl:basis-3/4 xl:items-center xl:justify-start xl:gap-16">
            <a className="cursor-pointer">Features</a>
            <a className="cursor-pointer">Pricing</a>
            <a className="cursor-pointer pb-3">Resources</a>
            <hr className="xl:hidden w-5/6 border-slate-50" />
            <a className="xl:hidden cursor-pointer pt-3">Login</a>
            <a className="xl:hidden cursor-pointer bg-cyan-400 px-28 py-2 rounded-full xl:align-top xl:px-4 xl:py-1 text-white">Sign Up</a>
          </div>
        ): ''}
      </div>
      <div className="hidden xl:flex xl:basis-1/4 xl:justify-end xl:items-center xl:gap-5">
        <a className="cursor-pointer">Login</a>
        <a className="cursor-pointer bg-cyan-400 rounded-full xl:align-top xl:px-4 xl:py-1 text-white">Sign Up</a>
      </div>
    </nav>
  )
}

export default Header