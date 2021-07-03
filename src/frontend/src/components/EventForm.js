export default function EventForm({ onsubmitHandler }) {

    return (
        <div>
            <form onSubmit={onsubmitHandler}>
                <div className="">
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        name="title"
                        placeholder="Event Title" required />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        name="about"
                        placeholder="About Event" required />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        name="host"
                        placeholder="Event Host" required />
                </div>
                <div className="mb-3">
                    <input
                        type="url"
                        className="form-control"
                        name="url"
                        placeholder="Event URL" required />
                </div>

                <div className="mb-3">
                    <input
                        type="url"
                        className="form-control"
                        name="image"
                        placeholder="Event Image Url" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="startDate"
                        placeholder="Event Date" required />
                </div>
                <div>
                    <button className="btn btn-primary btn-lg">Create Event</button>
                </div>
            </form>
        </div>
    )
}