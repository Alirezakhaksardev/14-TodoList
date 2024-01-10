import React from "react";

function Form({ value, change , submit , error}) {
  return (
    <form className="py-3" onSubmit={(e) => submit(e)}>
      <div className="form-group row">
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            افزودن کار
          </button>
        </div>
        <div className="col-8">
          <input type="text" className="form-control-plaintext mb-2 border-bottom" value={value} onChange={change} />
          {
            error && <small className="text-danger pt-2">{error}</small>
          }
        </div>
      </div>
    </form>
  );
}
export default Form;
