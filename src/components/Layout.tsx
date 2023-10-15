import { Footer } from "./Footer"
import Header from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header text="Dio Bank" />
      { children }
      <Footer />
    </>
  )
}
