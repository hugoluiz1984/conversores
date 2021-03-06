import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

 function ConverterText() {
  
  const [text, setText] = React.useState('');
  const pattern = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
  const sentence = /^[!;:.?[\n][ ]]*$/
  const sent = ['!',';',':','.','?','\n',' ',]
  const sentences = ['!','.','?','\n']
  

  //console.log(text)

  function capitalize() {
    if (text !=''){
      let frase = (text.substring(0).toLowerCase())
      //console.log(frase);
      let letras=''
      for (let i = 0; i < frase.length; i++){// verifica todas as letras
        //console.log(sent.indexOf(frase.charAt(i)),frase.charAt(i))
        if(i===0){
          letras=letras+frase.charAt(i).toUpperCase();
        }
        else{
          if(sentences.indexOf(frase.charAt(i))!=-1){ //verificar o caractere
            letras=letras+frase.charAt(i);
            //console.log(frase.charAt(i),'dentro')
            letras=letras+frase.charAt(i+1).toUpperCase();
            if(frase.charAt(i+1)===' '||frase.charAt(i+1)==='\n'){
              //console.log(frase.charAt(i+1),'dentro+1')
              //console.log(frase.charAt(i+2),'dentro+2')
              letras=letras+frase.charAt(i+2).toUpperCase();
              i++
            }
            i++;
          } else {
            letras=letras+frase.charAt(i);
            //console.log(frase.charAt(i),'fora')
          }
        }
        
      }
      setText(letras);
    }else {
      alert('Favor entrar com o texto');
    }
  }


  function toTitleCase() {
    if (text !=''){
      let frase = (text.substring(0).toLowerCase())
      //console.log(frase);
      let letras=''
      for (let i = 0; i < frase.length; i++){// verifica todas as letras
        //console.log(sent.indexOf(frase.charAt(i)),frase.charAt(i))
        if(i===0){
          letras=letras+frase.charAt(i).toUpperCase();
        }
        else{
          if(sent.indexOf(frase.charAt(i))!=-1){ //verificar o caractere
            letras=letras+frase.charAt(i);
            //console.log(frase.charAt(i),'dentro')
            letras=letras+frase.charAt(i+1).toUpperCase();
            if(frase.charAt(i+1)===' '||frase.charAt(i+1)==='\n'){
              //console.log(frase.charAt(i+1),'dentro+1')
              //console.log(frase.charAt(i+2),'dentro+2')
              letras=letras+frase.charAt(i+2).toUpperCase();
              i++
            }
            i++;
          } else {
            letras=letras+frase.charAt(i);
            //console.log(frase.charAt(i),'fora')
          }
        }
        
      }
      setText(letras);
    }else {
      alert('Favor entrar com o texto');
    }
  }

  function toUpper() {

    if (text !=''){
      let frase = (text.substring(0).toUpperCase());
      setText(frase)
      //setText(newStr.join(' '));
      
    }else {
      alert('Favor entrar com o texto');
    }
  } 
  function toLower() {

    if (text !=''){
      let frase = (text.substring(0).toLowerCase());
      setText(frase)
      
    }else {
      alert('Favor entrar com o texto');
    }
  }
  function alternating() {

    if (text !=''){
      //const arr = text.split(' ');
      //console.log(arr.length);
      
      let letra = '';
      for (let i = 0; i < text.length; i++){// verifica todas as palavras
        if(i%2===1){
          letra=letra+(text.charAt(i).toUpperCase())
        }else{
          letra=letra+(text.charAt(i).toLowerCase())
        }
      }
      setText(letra); 
    }else {
      alert('Favor entrar com o texto');
    }
  }

  function inverse() {

    if (text !=''){
      //const arr = text.split(' ');
      //console.log(arr.length);
      let newStr = [];
      
      let letra = '';
      for (let i = 0; i < text.length; i++){// verifica todas as palavras
        if(/[A-Z??????????????????????????????????]/.test(text.charAt(i))){
          letra=letra+(text.charAt(i).toLowerCase())
        }else {
          letra=letra+(text.charAt(i).toUpperCase())
        }
      }
      setText(letra); 
    }else {
      alert('Favor entrar com o texto');
    }
  }

  return (
    <div className='container'>
      <Head>
        <title>Conversores de Texto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <h3>Acidentalmente deixou o Caps Lock do teclado ligado e escreveu algo, e n??o quer escrever tudo de novo?</h3>
        <p>Insira o seu texto e escolha para que tipo de formato deseja converter.</p>
        <form className='form-floating ms-1'>
            <textarea 
            className='form-control textarea' 
            placeholder="Leave a comment here" 
            id="floatingTextarea" 
            type="text" 
            value={text}
            onChange={e => setText(e.target.value)}
            />
            <label className="floatingTextarea">Digite o seu Texto aqui</label>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={capitalize}>Formato de frase</button>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={toUpper}>MAI??SCULAS</button>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={toLower}>min??sculas</button>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={toTitleCase} >Formato Mai??sculas</button>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={alternating} >fOrMaTo aLtErNaDo</button>
            <button type="button" className="btn btn-outline-primary mt-2 me-2 " onClick={inverse} >Inverter</button>
        </form>
      </main>
    </div>
  )
}

export default ConverterText