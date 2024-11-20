import { Header } from "../../Layouts/Header/Header"
import { Introduction } from "../../Layouts/Introduction/Introduction"
import { Presentation } from "../../Layouts/Presentation/presentation"

Header
export const Home = () => {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Presentation/>

    </div>
  )
}
