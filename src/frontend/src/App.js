import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Events from './components/Events';
import EventForm from './components/EventForm';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/events`)
    setEvents(await res.json())
  }

  const createEvent = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const event = {}
    for (let pair of data.entries()) {
      event[pair[0]] = pair[1]
    }
    e.target.reset()

    const res = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/events`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      body: JSON.stringify(event)
    })

    const msgBox = e.target.firstChild
    if (res.status === 200) {
      msgBox.classList.add("alert", "alert-success")
      msgBox.innerText = "Event Created"
      fetchEvents()
    } else {
      msgBox.classList.add("alert", "alert-danger")
      msgBox.innerText = "Something went wrong"
    }
    setTimeout(() => {
      msgBox.innerText = ""
      msgBox.classList.remove("alert", "alert-success", "alert-danger")
    }, 3000);
  }

  const deleteEventById = async (e, id) => {
    await fetch(`${process.env.REACT_APP_API_ROOT_URL}/events/${id}`, {
      method: "DELETE"
    })
    fetchEvents()
  }

  useEffect(() => {
    fetchEvents();
  }, [])

  return (
    <div className="App">
      <Layout>

        <Modal title="Create new Event" >
          <EventForm onsubmitHandler={createEvent} />
        </Modal>

        <Events events={events} deleteEventById={deleteEventById} />

      </Layout>
    </div>
  );
}

export default App;
