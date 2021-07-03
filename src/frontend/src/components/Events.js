import Event from "./Event"

export default function Events({ events, deleteEventById }) {

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {events.map(event => (
                <div key={event.id} className="col card-group">
                    <Event event={event} deleteEventById={deleteEventById} />
                </div>
            ))}
        </div>
    )
}