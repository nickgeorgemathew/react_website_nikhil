import image1 from './OIP.jpg'
import image2 from './qq.jpg'
import image3 from './ss.jpg'


const bgarray=[
  {
    num:1,
    title:"one",
    img:image1
  }
  ,
  {
    num:2,
    title:"two",
    img:image2
  }
,
{
  num:3,
  title:"two",
  img:image3
}





]
const res=bgarray.map((item,index)=>(
  <div key={index} className="  text-slate-50 flex flex-col  items-center justify-center p-0 w-screen left-0 right-0 bg-slate-950 min-h-screen  bg-cover bg-no-repeat"style={{ backgroundImage: `url(${item.img})` }}>
        {/*  card content */}
        
      <p>{item.title}</p>
          {/*button */}
        <div>
          <button>
            ordernow

          </button>
          <button>
            demo drive
            
          </button>
        </div>
      </div>

))

export  const Content_card =() => {
  return (
    //container
    <div className="flex flex-col items-center bg-amber-700 w-screen h-screen p-0 relative text-center  mt-0 ">
      {/* First card */}
      {res}
      

     
    </div>
    
    
  )
}

