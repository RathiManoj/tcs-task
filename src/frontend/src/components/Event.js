export default function Event({ event, deleteEventById }) {
    return (
        <div className="card border-light mb-3 bg-transparent" /* style={{ width: "18rem" }} */>
            <img src={event.image} alt={event.title} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{event.title}</h3>
                <h6>Host: {event.host}</h6>
                <p className="card-text">{event.about}</p>

                <p>{(new Date(`${event.startDate}`)).toString().slice(0, 15)}</p>

                <div className="d-flex justify-content-between">
                    <a href={event.url} target="_blank" rel="noreferrer" className="card-link btn btn-lg btn-primary">Join</a>
                    <button className="btn btn-outline-danger" onClick={(e) => { deleteEventById(e, event.id) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}