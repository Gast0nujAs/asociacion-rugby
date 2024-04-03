import Navbar from "./Navbar";
import logo from "../assets/img/logo.jpeg.jpeg"
import logoArpro from "../assets/logo-arpro/arpro-Logo.jpeg"

export function Header() {
    return (
        <header className="flex place-content-between items-center ">
            <img src={logoArpro} alt="logo" className="w-[90px] h-[70px] sm:w-[160px] sm:h-[170px]"/>
            <Navbar />
        </header>
    )
};