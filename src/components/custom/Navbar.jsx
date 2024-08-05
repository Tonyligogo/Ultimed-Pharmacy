import { useState } from "react";
import Logo from '../../assets/UltimedLogo.png'
import { Heart, Menu, MessagesSquare, ShoppingCart, User, X } from "lucide-react";

const icons=[
    {icon:<Heart />, key:1, title:'Wishlist'},
    {icon:<ShoppingCart />, key:2, title:'Your cart'},
    {icon:<User />, key:3, title:'Account'},
]

function Navbar() {
    const [openMenu, setOpenMenu] = useState(true);
  return (
    <nav className="bg-white md:flex md:items-center md:justify-between px-4 w-full z-50 fixed top-0 left-0 shadow-sm">
      <div className="flex justify-between items-center bg-white">
        <img src={Logo} alt="Logo" className="w-28 aspect-auto" />
        <span  onClick={()=>setOpenMenu(prev=>!prev)}>
            {openMenu ? 
            <Menu  className="block cursor-pointer md:hidden h-6 w-6"/> 
            : 
            <X className="block cursor-pointer md:hidden h-6 w-6"/>
            }
        </span>
      </div>
      <div className="flex gap-10">
      <ul className={`${!openMenu ? 'top-[62px] opacity-100' :'top-[-400px]'} md:flex md:items-center md:gap-2 z-[-1] md:z-auto md:static absolute bg-white w-full
      md:w-auto md:opacity-100 opacity-0 transition-all ease-in duration-500`}>
        <li className="flex gap-2 items-center border rounded-full p-3"><MessagesSquare />Chat with our <b className="text-[#ef4281]">Pharmacist</b> </li>
        {icons.map((icon)=>(
            <li key={icon.key} title={icon.title} onClick={()=>setOpenMenu(true)} className="cursor-pointer my-6 ml-2 md:my-0">
              {icon.icon}
            </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar