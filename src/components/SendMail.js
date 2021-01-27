import { useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import firebase from 'firebase'
import { db } from '../firebase'

const SendMail = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data) => {
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    dispatch(closeSendMessage())
  }
  return (
    <div className="SendMail">
      <div className="SendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="SendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" placeholder="To" type="email" ref={register( {required: true} )}/>
        {errors.to && <p className="SendMail__error">To is required!</p>}
        <input name="subject" placeholder="Subject" type="text" ref={register( {required: true} )} />
        {errors.to && <p className="SendMail__error">Subject is required!</p>}
        <input name="message" className="SendMail__message" placeholder="Message..." type="text" ref={register( {required: true} )}/>
        {errors.to && <p className="SendMail__error">Message is required!</p>}

        <div className="SendMail__options">
          <Button className="SendMail__send" variant="contained" color="primary" type="submit" >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
