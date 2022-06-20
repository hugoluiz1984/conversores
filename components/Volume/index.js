import React, {useState, useEffect} from 'react'

export default function Volume() {
  const [num1, setNum1]= useState(0);
  const [num2, setNum2]= useState(0);
  const [unit1, setUnit1]= useState(1);
  const [unit2, setUnit2]= useState(1000);
  const [symbol, setSymbol]= useState('Fº');

  useEffect(() => {
    let n1= parseFloat(num1);
    let un1= parseFloat(unit1);
    let un2= parseFloat(unit2);
    let n2 =''
    let caso=0;
    n2=(n1/un1*un2)
    if(un2==1)setSymbol('L')
    if(un2==1000)setSymbol('mL')
    if(un2==0.264172)setSymbol('gal')
    if(un2==33.814)setSymbol('Oz')
    setNum2(n2);

  }, [num1,unit1,unit2]);
  return (
    <div>
      <div className="row align-items-start">
            <div className='row'>
              <div className='col'>
                <label className="form-label">De:</label>
                <input type="number" className="form-control" 
                id="Numero1" placeholder="numero" 
                value={num1}
                onChange={e=>{setNum1(e.target.value)}}
                />
              </div>
              <div className='col'>
                <label  className="form-label">Para:</label>
                <input type="number" className="form-control" id="Numero2" placeholder="numero" value={num2} disabled={true} />
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col'>
                <select className="form-select" size="7" aria-label="size 3 select example" onChange={e=>{setUnit1(e.target.value)}}>
                <option value={1} selected>Litro</option>
                  <option value={1000}>Mililitro </option>
                  <option value={0.264172}>Galões</option>
                  <option value={33.814}>Onça</option>
                </select>
              </div>
              <div className='col'>
              <select className="form-select" size="7" aria-label="size 3 select example" onChange={e=>{setUnit2(e.target.value)}}>
                  <option value={1} >Litro</option>
                  <option value={1000}selected>Mililitro </option>
                  <option value={0.264172}>Galões</option>
                  <option value={33.814}>Onça</option>
              </select>
              </div>
            </div>
            <div className='row mt-2 '>
                <p className='text-center fw-bold text-danger'>{num1!=''?  `O resultado é ${num2.toFixed(4).replace('.',',')} ${symbol}.`:''}</p>
            </div>
          </div>
    </div>
  )
}
