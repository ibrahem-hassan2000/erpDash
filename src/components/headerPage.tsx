import MessageIcon from "../assets/icons/message";
import NotificationsIcon from "../assets/icons/Notifications";
import MenuProfile from "./menuProfile";

function HeaderPage() {
  return (
    <div className=" h-14 mdl:h-[90px] bg-white flex items-center justify-between gap-7 px-1 mdl:px-8">
      <h1 className=" text-sm mdl:text-[26px] capitalize">employees</h1>
      <div className="flex items-center gap-2 mdl:gap-5">
        <div className=" duration-200 cursor-pointer hover:shadow-md relative mdl:w-12 w-8 h-8 mdl:h-12 rounded-full bg-[#F0F2F5] flex items-center justify-center p-2">
          <span className=" absolute -top-2 place-content-center leading-2 -end-1 z-10 bg-main w-4 h-4 mdl:w-6 mdl:h-6 rounded-full flex items-center justify-center text-white font-bold text-[10px] mdl:text-xs">
            3+
          </span>
          <MessageIcon className="h-5 w-auto" />
        </div>
        <div className=" duration-200 cursor-pointer hover:shadow-md relative mdl:w-12 w-8 h-8 mdl:h-12 rounded-full bg-[#F0F2F5] flex items-center justify-center p-2">
          <span className=" absolute -top-2 place-content-center leading-2 -end-1 z-10 bg-main w-4 h-4 mdl:w-6 mdl:h-6 rounded-full flex items-center justify-center text-white font-bold text-[10px] mdl:text-xs">
            9+
          </span>
          <NotificationsIcon className="h-5 w-auto" />
        </div>
        <MenuProfile/>
      </div>
    </div>
  );
}

export default HeaderPage;
