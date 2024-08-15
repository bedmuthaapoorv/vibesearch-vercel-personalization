"use client"
import { ReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from 'react';

const VideoPreview=(props:any)=>{
  const stream=props.stream;
  console.log(stream)
  const videoRef:any=useRef(null); 
  useEffect(()=>{
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  },[stream])
  if (!stream) {
    return null;
  }
  return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center"
  }}>
    Live Preview
  <video id="livePreview" ref={videoRef} width="390vw" autoPlay />
  </div>
    );
  
}
function liveStream(stream:any){
  const previewStream=stream;
  if(previewStream!=null){
    return <VideoPreview stream={previewStream} />
  }
}
function download(mediaBlobUrl:any){
  if(mediaBlobUrl!=null){
    return (
  <a href={mediaBlobUrl} download="apoorv.mp4">
    <button id="mediaDownload" >
      download
    </button>
  </a>
)
}

}
  function Dwn(){
    
    useEffect(()=>{
      const a=document.getElementById("mediaDownload")
      if(a){
        a.click()
      }
    })
    return <></>
  }
  function stopRecordingWrapper(fn:any){
    
    //document.getElementById("livePreview").style.display='hidden'
    fn()
  }
  function liveStreamWrapper(previewStream:any,fn:any,status:any){
    //console.log(status)
    if(status!='stopped'){
      return fn(previewStream)
    }
  }
  function recordedVideo(mediaBlob:any,status:any){
    //console.log(status)
    if(status=='stopped'){
      return <div>Recorded Video<p/><video width="390vw" src={mediaBlob} controls></video></div>
    }
  }
  function newCam() {
    let [audioOnOff,setAudio]=useState<any>('true')
    return (
    <div className="App">
      <ReactMediaRecorder
      video
      audio={audioOnOff}
      render={({ status, startRecording, stopRecording, mediaBlobUrl,previewStream}) => (
        <div className='App__mediaRecorderWrapper'>
          
          <div className='mediaRecorderWrapper__buttons'>
            <div>Status : {status}</div>
            <div>Keep Mic On: {''+audioOnOff} </div>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={()=>stopRecordingWrapper(stopRecording)}>Stop Recording</button>
            <button onClick={()=>setAudio(!audioOnOff)}>Mic On or Off</button>
            {download(mediaBlobUrl)}
          </div>

           {recordedVideo(mediaBlobUrl,status)}
           
          
            {/* {Dwn()} */}
            
           {liveStreamWrapper(previewStream,liveStream,status)}
           
        </div>
      )}
    />
    </div>
  );
}

export default newCam;