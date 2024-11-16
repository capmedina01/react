import { LogoPrincipal } from "../../UI/LogoPrincipal/LogoPrincipal"
import { Navbar } from "../../UI/Navbar/Navbar"


export const Header = () => {
    return (
      <header>
         <LogoPrincipal/>    
        <h1>Carlos Andres Perdomo Medina</h1>
        <Navbar/>        
      </header>
    )
  }