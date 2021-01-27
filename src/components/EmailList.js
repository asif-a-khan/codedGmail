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
import EmailRow from "./EmailRow"
import { useState, useEffect } from "react"
import { db } from "../firebase"


const EmailList = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot( snapshot => 
        setEmails(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
  }, [])
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
        <Section Icon ={InboxIcon} title='Primary' color='red' selected={true} />
        <Section Icon ={PeopleIcon} title='Social' color='#1A73E8'  />
        <Section Icon ={LocalOfferIcon} title='Promotions' color='green'  />
      </div>

      <div className="EmailList__list">
        {emails.map(({id, data: { to, subject, message, timestamp }}) => {
          return (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EmailList
