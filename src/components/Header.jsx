import Navbar from "./Navbar";
import logo from "../assets/img/logo.jpeg.jpeg"
import logoArpro from "../assets/logo-arpro/arpro-Logo.jpeg"

export function Header() {
    return (
        <header className="flex place-content-between items-center ">
            <img src={logoArpro} alt="logo" className="w-[160px] h-[170px]"/>
            <Navbar />
        </header>
    )
};