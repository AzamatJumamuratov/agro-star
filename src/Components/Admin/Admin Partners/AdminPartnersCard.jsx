const AdminPartnersCard = ({ name, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      <div className="xl:px-5 lg:px-3 mt-4 px-2 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {name || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {description || "Описание Пусто."}
        </p>
      </div>
    </div>
  );
};

export default AdminPartnersCard;
