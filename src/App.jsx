import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Input from './components/Input'
import Intro from './components/Intro'
import Start from './components/Start'
import Statistics from './components/Statistics'


function App() {
  return (
    <div id="home" className='pt-5 2xl:pt-10 xl:pt-10 text-indigo-950'>
      <Header />
      <Intro />
      <Input />
      <div className='bg-slate-100'>
        <Statistics />
        <hr className="small:top-[1100px] small:h-[600px] absolute top-[1015px] left-1/2 rotate-180 h-screen border-4 xl:relative xl:rotate-0 xl:h-0 xl:w-1/2 xl:left-1/3 xl:top-64 xl:border-4 border-cyan-500" />
        <Cards />
      </div>
      <Start />
      <Footer />
    </div>
  )
}

export default App
