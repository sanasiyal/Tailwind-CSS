import Link from "next/link";

const Header=()=>{
    return(
            
      
     <nav className=" bg-black p-4 flex justify-between items-center border font-serif border-black ">

          <span className="text-2xl font-extrabold  text-amber-600 animate-bounce">Moonlight Cafe</span>
          <ul className="flex space-x-10">
           
                <li className="font-bold hover:text-white  underline p-3 text-amber-600" > <Link href={"home"}>Home</Link></li> 
                <li className="font-bold hover:text-white  underline p-3  text-amber-600" > <Link href={"menu"}>Menu</Link></li>
                <li className="font-bold hover:text-white  underline p-3  text-amber-600"><Link href={"about"}>About</Link></li>
                <li className="font-bold   hover:text-white  underline p-3  text-amber-600"> <Link href={"contact"}>Contact</Link></li>
                <li className="font-bold text-orange-700 p-3 border rounded-xl animate-pulse">Buy now</li>
               
            </ul> 
       

            </nav>
    
    )
}
export default Header;