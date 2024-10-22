import Link from "next/link";
const Header =()=>{
    return(
       <header className="font-bold text-6xl not-italic py-7 text-left px-11 bg-red-900 py-11  border-x-8
       border-y-8 rounded-3xl border-orange-400 text-yellow-600  ">
        
        Fired Up Pizza

        <Link href="/about " target="-blank"className="float-end text-xl
          leading-10 font-bold">About Us</Link >
        
       </header>   
       
    )
}

export default Header;