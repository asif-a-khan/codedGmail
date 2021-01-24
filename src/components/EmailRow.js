import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="EmailRow">
      <div className="EmailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <div className="EmailRow__title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="EmailRow__message">
        <h4>
          {subject}
          <span className="EmailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="EmailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow
