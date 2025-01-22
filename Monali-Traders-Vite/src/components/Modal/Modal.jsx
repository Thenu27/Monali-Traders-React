import './Modal.css';


const Modal =()=>{
    return (
        <div>
          {/* Button to trigger modal */}
          <button type="button" className="btn btn-primary" onClick={toggleModal}>
            Launch demo modal
          </button>
    
          {/* Modal */}
          {showModal && (
            <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default Modal