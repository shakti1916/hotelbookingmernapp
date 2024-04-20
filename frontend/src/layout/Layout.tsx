import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

interface Props {
    children:React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header/>
        <Hero/>
        <main className='pl-20 pr-20 py-10 flex-1'>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout