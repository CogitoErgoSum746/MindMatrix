import { Sidebar } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiChartPie, HiUser, HiViewBoards } from 'react-icons/hi';
import logoImage from "../../../images/logo.png";

function AdminSidebar() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
    // window.location.reload();
  };

  return (
    <Sidebar className='bg-blue-200'>
      <Sidebar.Logo href="/admin" className="text-5xl" img={logoImage} imgAlt="Flowbite logo">
        Admin Panel
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/organizations" icon={HiViewBoards}>
            Organizations
          </Sidebar.Item>
          <Sidebar.Item href="/admin/directusers" icon={HiUser}>
            Direct Users
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item> */}
          <Sidebar.Item onClick={Logout} className='cursor-pointer' icon={HiArrowSmRight}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default AdminSidebar;