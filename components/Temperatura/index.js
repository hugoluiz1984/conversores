import React, {useState, useEffect} from 'react'

export default function Temperatura() {
    const [num1, setNum1]= useState(0);
    const [num2, setNum2]= useState(0);
    const [unit1, setUnit1]= useState(0);
    const [unit2, setUnit2]= useState(1);
    const [symbol, setSymbol]= useState('Fº');

    useEffect(() => {
      let n1= parseFloat(num1);
      let un1= parseFloat(unit1);
      let un2= parseFloat(unit2);
      let n2 =''
      let caso=0;
      if(un1===0 && un2===1){
        caso=1;
      }
      if(un1===0 && un2===2){
        caso=2;
      }
      if(un1===1 && un2===2){
        caso=3;
      }
      if(un1===2 && un2===1){
        caso=4;
      }
      if(un1===2 && un2===0){
        caso=5;
      }
      if(un1===1 && un2===0){
        caso=6;
      }
      switch (caso) {
        case 0:
            n2= n1;
            break;
        case 1:
            //(0 °C × 9/5) + 32 = 32 °F
            n2= (n1*(9/5))+32;
            break;
        case 2:
            // 0 °C + 273,15 = 273,15 K
            n2=n1+273,15;
            break;
        case 3:
            //(0 °F − 32) × 5/9 + 273,15 = 255,372 K
            n2=(n1-32)*(5/9)+273,15;
             break;
        case 4:
            //(0 K − 273,15) × 9/5 + 32 = -459,7 °F
            n2 = (n1 - 273,15)*(9/5)+32;
            break;
        case 5:
            //0 K − 273,15 = -273,1 °C
            n2= n1 - 273,15;
        break; 
        case 6:
            //(0 °F − 32) × 5/9 = -17,78 °C
            n2= (n1-32)*(5/9)
            break;
        default:
            break;
      }
      if(un2==0)setSymbol('Cº')
      if(un2==1)setSymbol('Fº')
      if(un2==2)setSymbol('Kº')
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
                <option value={0} selected>Celsius</option>
                  <option value={1}>Fahrenheit </option>
                  <option value={2}>Kelvin</option>
                </select>
              </div>
              <div className='col'>
              <select className="form-select" size="7" aria-label="size 3 select example" onChange={e=>{setUnit2(e.target.value)}}>
                  <option value={0} >Celsius</option>
                  <option value={1} selected>Fahrenheit </option>
                  <option value={2}>Kelvin</option>
              </select>
              </div>
            </div>
            <div className='row mt-2 '>
                <p className='text-center fw-bold text-danger'>{num1!=''?  `O resultado é ${num2}${symbol}.`:''}</p>
            </div>
          </div>
    </div>
  )
}
