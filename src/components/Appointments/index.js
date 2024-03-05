import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    filteronStar: false,
    AppointmentsList: [],
  }

  add = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      title,
      id: uuidv4(),
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      title: '',
      date: '',
      AppointmentsList: [...prevState.AppointmentsList, newAppointment],
    }))
  }

  onTittleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    const selectedDate = event.target.value

    this.setState({
      date: selectedDate,
    })
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      AppointmentsList: prevState.AppointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  togglefilterOnstarred = () => {
    this.setState(prevState => ({
      filteronStar: !prevState.filteronStar,
    }))
  }

  render() {
    const {title, date, AppointmentsList, filteronStar} = this.state
    const ButtonisStarred = filteronStar ? 'filledButton' : 'CommonButton'
    const ResultAppointmentsList = AppointmentsList.filter(eachAppointment => {
      if (filteronStar) {
        return eachAppointment.isStarred === true
      }
      return eachAppointment
    })
    return (
      <div className="whiteBgContainer">
        <div className="formwithImage">
          <form className="form" onSubmit={this.add}>
            <h1 className="appointmentHg">Add Appointment</h1>
            <div className="inputAndLabel">
              <label htmlFor="title">TITLE</label>
              <input
                value={title}
                type="text"
                id="title"
                placeholder="Title"
                onChange={this.onTittleChange}
              />
            </div>
            <div className="inputAndLabel">
              <label htmlFor="date">DATE</label>
              <input
                value={date}
                type="date"
                id="date"
                placeholder="dd/mm/yyyy"
                onChange={this.onDateChange}
              />
            </div>
            <button type="submit" className="addButton">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="appointmentImage"
          />
        </div>
        <div className="allignheading">
          <h1 className="appointHg">Appointments</h1>
          <button
            type="button"
            className={`${ButtonisStarred}`}
            onClick={this.togglefilterOnstarred}
          >
            Starred
          </button>
        </div>
        <ul>
          {ResultAppointmentsList.map(eachAppointment => (
            <AppointmentItem
              eachAppointment={eachAppointment}
              key={eachAppointment.id}
              toggleIsStarred={this.toggleIsStarred}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Appointments
