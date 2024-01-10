import React from "react";

function ListItem({title , delHandler , doneHandler ,id , done}) {
  return (
    <li className={`list-group-item d-flex justify-content-between ${done ? 'bg-success text-white' : ' '}`}>
      {done ? <del>{title}</del>: title}
      <div>
        <button className="btn btn-small bg-danger text-white ms-2" onClick={()=>delHandler(id)}>
          {" "}
          <i className="fas fa-trash"></i>
        </button>
        <button className={`btn btn-small text-white ${done ? 'bg-warning' : 'bg-success'}`} onClick={() => doneHandler(id)}>
          {
            !done ? <i className="fas fa-check"></i> : <i className="fas fa-undo-alt"></i>
          }
        </button>
      </div>
    </li>
  );
}

export default ListItem;
