import React from 'react'

export default function Numeros() {
  return (
    <div className='container'>
        <div>
        <div className="row align-items-start">
          <div className='row'>
            <div className='col'>
              <label className="form-label">De:</label>
              <input type="number" className="form-control" id="Numero" placeholder="numero" />
            </div>
            <div className='col'>
              <label  className="form-label">Para:</label>
              <input type="number" className="form-control" id="Numero" placeholder="numero" disabled={true} />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <select className="form-select" size="7" aria-label="size 3 select example">
                <option value="0" defaultValue selected>Metros</option>
                <option value="1">Quilômetro </option>
                <option value="2">Centímetro</option>
                <option value="3">Milímetro </option>
                <option value="4">Milhas </option>
                <option value="5">Pés </option>
                <option value="6">Polegadas </option>
              </select>
            </div>
            <div className='col'>
            <select className="form-select" size="7" aria-label="size 3 select example">
                <option value="0" >Metros</option>
                <option value="1" defaultValue selected>Quilômetro </option>
                <option value="2">Centímetro</option>
                <option value="3">Milímetro </option>
                <option value="4">Milhas </option>
                <option value="5">Pés </option>
                <option value="6">Polegadas </option>
            </select>
            </div>
          </div>
          <div className='row mt-2'>

          </div>
        </div>
        </div>
    </div>
  )
}
