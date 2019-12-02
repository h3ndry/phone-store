import React from 'react'

export default function Tittle({ name, tittle }) {
  return (
    <div className="row">
      <div className="col-10 max-auto my-2 text-center text-tittle">
        <h1 className="text-capitilize font-weight-bold">
          {name}
          <strong className="text-blue"> {tittle} </strong></h1>
      </div>
    </div>
  )
}
