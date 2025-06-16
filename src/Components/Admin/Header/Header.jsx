const Header = ({ children }) => {
  return (
    <header className="pl-6 2xl:py-6 xl:py-4 lg:py-3 py-3 shadow-[0px_2px_10px_0px] shadow-[#0000001A]">
      <h1 className="2xl:text-almostN xl:text-2xl lg:text-lg font-bold text-[#2C3E50]">
        {children}
      </h1>
    </header>
  );
};

export default Header;
