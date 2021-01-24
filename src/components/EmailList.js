import { Checkbox, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingsIcon from "@material-ui/icons/Settings"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import Section from "./Section"


const EmailList = () => {
  return (
    <div className="EmailList">
      <div className="EmailList__settings">
        <div className="EmailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="EmailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="EmailList__sections">
        <Section Icon ={InboxIcon} title='primary' color='red' selected={true} />
        <Section Icon ={PeopleIcon} title='primary' color='#1A73E8'  />
        <Section Icon ={LocalOfferIcon} title='primary' color='green'  />
      </div>
    </div>
  )
}

export default EmailList
