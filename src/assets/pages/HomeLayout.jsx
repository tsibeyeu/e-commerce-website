import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
    Home
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default HomeLayout