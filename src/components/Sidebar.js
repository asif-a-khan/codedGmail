import { Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import InboxIcon from "@material-ui/icons/Inbox"
import SidebarOption from "./SidebarOption"

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large"/>}>Compose</Button>
      <SidebarOption Icon={InboxIcon } title="Inbox" number={54} />
    </div>
  )
}

export default Sidebar
