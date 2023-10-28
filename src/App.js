import { Line } from 'rc-progress';
import React, { useState } from 'react';

export default function App() {

  const [percent, setPercentage] = useState(0);
  const [progressBar, setProgressBar] = useState("none");

  const downloadFile = async() => {
    const fileUrl = 'https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg';
    const response = await fetch(fileUrl).then(res => {
      const contentLength = res.headers.get('content-length');
      let loaded = 0;
      setProgressBar("block");
      return new Response(
        new ReadableStream({
           start(controller){
            const reader = res.body.getReader();
            read();
            function read(){
              reader.read()
              .then((progressEvent) => {
                if(progressEvent.done){
                  controller.close();
                  return;
                }
                loaded += progressEvent.value.byteLength;
                console.log(Math.round((loaded/contentLength)*100) + "%");
                setPercentage(Math.round((loaded/contentLength)*100));
                controller.enqueue(progressEvent.value);
                read();
              })
            }
           }
        }))

    }).then(res => res.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      document.body.appendChild(img);
    })
    console.log(response);

  }

  return (

    <div style={{display:'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
      <h1>File</h1>
      <Line style={{width:'75%', display:`${progressBar}`}} percent={`${percent}`} strokeWidth={5} trailWidth={4} strokeColor="rgb(26,105,0,100)"/>
      <h3 display={`${progressBar}`}>{`${percent}`}%</h3>
      
      <div className="progress" style={{height: '30px', width: '75%'}}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={`${percent}`}
        aria-valuemin="0"
        aria-valuemax="100"
        width={`${percent}`}
      >{`${percent}`}
      </div>
      
    </div>
    <div style={{height: '10px'}}></div>
      <button onClick={downloadFile} style={{width:'30%', marginBottom:'2%'}}>
       Download File
      </button>


    </div>
  );
}
