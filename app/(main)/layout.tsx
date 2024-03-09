import { Navbar } from "./navbar";

const MainLayout = ({ children }: any) => {
  return ( 
    <div>
      <Navbar />
      {children}
    </div>
  );
};
 
export default MainLayout;
