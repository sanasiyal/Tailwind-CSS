
import Header from "./component/header/header";
import About from "./component/about/about";
import Footer from "./component/footer/footer";


export default function Home() {
  return (
<div className="bg-black" >
  <Header/>
<div >
<img   className="w-full h-99 position: relative;  " src="web.jpg" alt="picture" />
            <div>
                <h1 className="position: absolute; absolute inset-0 top-72 left-auto text-7xl text-white font-serif opacity-65 font-bold ">Crafted with  <br />Love, <br /> Served with a <br /> Smile</h1>
               
                
            </div>

</div>
<h1 className="text-4xl mt-16 text-center text-amber-600"> Classic Coffee Creations</h1>

<div className="flex m-14 space-x-11">
   
<div>
<img className=" w-56 h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./espreso.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Espresso</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./a2.jpg" alt=" pic" />
<h1 className="text-2xl text-center text-white">Americano</h1>
</div>

<div>
<img className="h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./m2.png" alt="pic" />
<h1 className="text-2xl text-center text-white">Mocha</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./cappuccino.jpg" alt=" pic" />
<h1 className="text-2xl text-center text-white">cappucino</h1>
</div>

<div>
<img className="h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./latte.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Latte</h1>
</div>

</div>

<h1 className="text-4xl mt-20 text-center text-amber-600"> Flavoured teas</h1>

<div className="flex m-20 space-x-16 ">

<div>
<img className=" w-56 h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./chai.webp" alt="pic" />
<h1 className="text-2xl text-center text-white">Tea</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./greentea.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Green tea</h1>
</div>

<div>
<img className="h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./icetea.png" alt="pic" />
<h1 className="text-2xl text-center text-white">Ice tea</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./herbal.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Herbal tea</h1>
</div>



</div>

<h1 className="text-4xl mt-20 text-center text-amber-600"> Flaky Delights</h1>

<div className="flex m-20 space-x-16  h-54 ">

<div >
<img className=" w-56 h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./Croissants.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Croissants</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./tartlets.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Tartlets</h1>
</div>

<div>
<img className="h-56 rounded-xl hover:scale-95 transition-transform duration-1000" src="./french pastry.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">French pastry</h1>
</div>

<div>
<img className="h-56 w-56 rounded-xl hover:scale-95 transition-transform duration-1000 " src="./choclateSprinkleDonuts.jpg" alt="pic" />
<h1 className="text-2xl text-center text-white">Chocolate Sprinkle Donuts</h1>
</div>

 </div>
 <About></About> <hr />
 <Footer></Footer>
</div>
  );
}