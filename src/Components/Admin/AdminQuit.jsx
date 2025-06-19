import { useNavigate } from "react-router";

const AdminQuit = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={handleClick}
      className="bg-primary ml-9 mb-4 p-2 duration-300 ease-in-outs active:bg-[#224836] text-white rounded-xl lg:text-sm text-xs"
    >
      Выйти из Аккаунта
    </button>
  );

  function handleClick() {
    localStorage.removeItem("token");
    navigate("/login");
  }
};

export default AdminQuit;
