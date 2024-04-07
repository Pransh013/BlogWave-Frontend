import {Outlet, useNavigate} from 'react-router-dom'
import AuthImage from '../assets/AuthImage.png'
const Authentication = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="hidden md:block relative w-1/2 h-screen rounded-md overflow-hidden">
          <div className="absolute w-full h-full z-10 bg-[#00000055]"></div>
          <img
            src={AuthImage}
            alt="Login_image"
            className=" h-full w-full object-cover bg-no-repeat"
          />
        </div>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Authentication