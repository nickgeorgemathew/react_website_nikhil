import image1 from './w.jpg'

import image3 from './ss.jpg'
import image4 from './wp2.jpg'
import Footer from './Footer'


const bgarray=[
  {
    num:1,
    title:"one",
    img:image1,
    datas:"sdasdasdsadasda"
  }
  ,
  
{
  num:3,
  title:"two",
  img:image3,
  datas:"sdasdasdsadasda"
},
{
  num:4,
  title:"two",
  img:image4,
  datas:"sdasdasdsadasda"
}





]
const res=bgarray.map((item,index)=>(
  <div key={index} className="  text-slate-50 flex flex-col   items-center justify-center p-0 w-screen left-0 right-0 bg-slate-950 min-h-screen  bg-cover bg-no-repeat"style={{ backgroundImage: `url(${item.img})` }}>
        {/*  card content */}
        <div>
          <p className='block text-slate-950 '>{item.title}</p>
          <p className='text-slate-950'>{item.datas}</p>
        </div>
        
      
          {/*button */}
        <div className=' flex flex-row gap-28 w-full h-2/4 pt-96 items-center justify-center'>
          <button className=' mob_s:w-fit sm:w-1/6 opacity-100 bg-opacity-0 mt-50 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-4 border-black border-solid hover:border-transparent rounded h-10
          w-1/6'>
            ordernow

          </button>
          <button className=' mob_s:w-fit sm:w-1/6 mt-50 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded h-10'>
            demodrive
            
          </button>
        </div>
      </div>

))

export  const Content_card =() => {
  return (
    //container
    <div className="flex  flex-col items-center bg-amber-700 w-screen h-screen p-0 relative text-center  mt-0 ">
      {/*  card */}
      {res}
      {/* card */}
       {/* footer */}
      <div className=' pl-0'>
        <Footer/>
      </div>
       {/*  footer */}
      
      

     
    </div>
    
    
  )
}

