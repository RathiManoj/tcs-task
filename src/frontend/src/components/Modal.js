export default function Modal({ title, children }) {
    return (
        <div className="mb-3">
            {/* Button trigger modal  */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                {title}
            </button>

            {/* Modal  */}
            <div className="modal fade text-dark" id="modal" tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}