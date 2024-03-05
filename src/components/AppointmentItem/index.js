// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppointment, toggleIsStarred} = props
  const {id, title, date, isStarred} = eachAppointment
  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onclickToggleIsStarred = () => {
    toggleIsStarred(id)
  }
  const imgLink = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="AppointmentItem">
      <div className="titleStar">
        <p className="title">{title}</p>
        <button
          onClick={onclickToggleIsStarred}
          type="button"
          className="starButton"
          data-testid="star"
        >
          <img src={imgLink} alt="star" />
        </button>
      </div>
      <p className="date">Date: {formatedDate}</p>
    </li>
  )
}

export default AppointmentItem
