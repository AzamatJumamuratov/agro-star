import { useNavigate } from "react-router";
import quit_icon from "../../assets/sign_out.svg";

const AdminQuit = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-4 my-4">
      <button onClick={handleClick} className="bg-primaryGreen p-2 rounded-lg">
        <img src={quit_icon} className="size-5" />
      </button>
    </div>
  );

  function handleClick() {
    localStorage.removeItem("token");
    navigate("/login");
  }
};

export default AdminQuit;
