import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="my-3">Todo List</h2>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 my-2">
          <button className="btn btn-primary">Add More</button>
          <div className="row my-2">
            <div className="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Searching..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary">
                    <span>
                      <i class="bi bi-search"></i>
                    </span>
                    Searching
                  </button>
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle">
                  Sort
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value="-1">All</option>
                    <option value="0">Hide</option>
                    <option value="1">Active</option>
                  </select>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
