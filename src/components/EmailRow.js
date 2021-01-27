import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { selectMail } from "../features/mailSlice"

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )

    history.push('/mail')
  }

  return (
    <div className="EmailRow" onClick={openMail}>
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
