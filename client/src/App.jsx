import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router'
import ParticlesBg from './components/particle-background/ParticlesBg'

function App() {
 
  return (
      <div className='w-full items-center justify-center flex'>
        <div className='max-w-[1400px] w-full h-screen  flex justify-center items-center'>
      <div className=' text-2xl w-full  h-screen text-white relative'>

<div className='w-full flex flex-col justify-center items-center'>
<div className='absolute top-0 left-0 w-full z-50'>
<NavBar id= {"top"} />
</div>

<main className='min-h-screen w-full'>
  <div className='w-full h-full mt-40'>
  <Outlet/>
  </div>
  <div className='w-full absolute inset-0'>
  <ParticlesBg/>
  </div>
</main>

<div className='w-full'>
<Footer id= {"footer"} />
</div>

</div>


</div>
    </div>
      </div>
  )
}

export default App
