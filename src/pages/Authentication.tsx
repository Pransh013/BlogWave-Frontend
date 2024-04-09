import {Outlet} from 'react-router-dom'
import AuthImage from '../assets/AuthImage.png'
const Authentication = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="hidden md:block relative w-1/2 h-screen">
          <div className="absolute w-full h-full z-10 bg-[#00000095]"></div>
          <img
            src={AuthImage}
            alt="Login_image"
            className=" h-full w-full object-cover bg-no-repeat"
          />
        </div>
        <section className="flex flex-1 justify-center items-center flex-col border-2 border-white">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Authentication