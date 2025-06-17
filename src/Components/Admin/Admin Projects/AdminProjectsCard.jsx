import img_src from "../../../assets/images/NewsCard.png";
// import clock_icon from "../../../assets/clock.svg";
// import eye_icon from "../../../assets/eye.svg";
// import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";

const AdminProjectsCard = ({ title, description, image_url }) => {
  // const formattedDate = formatDateToDDMMYYYY(published_at, "/");
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      {image_url && (
        <img src={image_url} alt="news image" className="w-full mb-4" />
      )}
      <div className="xl:px-5 lg:px-3 mt-4 px-2 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {/* {content != "" ? content.slice(0, 60) + "...."} */}
          {description || "Описание Пусто."}
        </p>
        {/* <div className="flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5  ">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src={eye_icon} alt="time icon" className="xl:h-auto h-5" />
            <span>245</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminProjectsCard;
