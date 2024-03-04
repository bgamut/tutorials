import React,{useState,useEffect,useCallback,useRef} from "react";
const App=()=>{
  const[isPlaying,setIsPlaying]=useState(false);
  const [bpm,setBpm]=useState(60);
  console.log(process.env)
  const audio1 = new Audio(process.env.PUBLIC_URL+"/strong_pulse.wav");
  const audio2=new Audio(process.env.PUBLIC_URL+"/weak_pulse.wav");
  const [currentBeat, setCurrentBeat]=useState(1);
  const inputArea=useRef(null);
  const buttonA=useRef(null);
  
  function handleEnter(e){
    //console.log(e.keyCode +" "+e.key)
    
    if(e.keyCode===13||e.keyCode===32){
      //console.log(document.activeElement)
      if(document.activeElement==buttonA.current){
        return
      }
      else if(document.activeElement==inputArea.current){
        buttonA.current.click()
      }
    }
  }
  
  useEffect(()=>{
    console.log("setup")
    document.addEventListener("keydown",handleEnter,false);
    //return ()=>{document.removeEventListener("keydown",handleEnter,false);};
    //const input = document.getElementById("textarea")
    //const inputArea=useRef<HTMLInputElement>(null);
    
    //inputArea.addEventListener("keypress",handleEnter)
    //inputArea.addEventListener("keydown",handleEnter);
    //return ()=>inputArea.removeEventListener("keydown",handleEnter);
    inputArea.current.focus()
  },[]);
  useEffect(()=>{
  //window.addEventListener("keydown",handleEnter)
    var interval
    if(bpm==0||isNaN(bpm)){
      /*
      setBpm(60)
      */
      if(isPlaying){
        toggleSound()
      }
      interval=1000
    }
    else{
      
      interval=60/bpm *1000;
    }
  
  const playNextBeat=()=>{
    if (currentBeat==1){
      audio1.play();
    }else{
      audio2.play();
    }
    console.log(currentBeat)
    setCurrentBeat((currentBeat)=>(currentBeat%4)+1);
  };
  let timer;
  if(isPlaying){
    timer = setInterval(playNextBeat, interval)
  }
    return ()=>{
      clearInterval(timer);
    };

  
  
  },[isPlaying,bpm,currentBeat]);

  const toggleSound=()=>{
    
    setCurrentBeat(1)
    if(isPlaying){
      audio1.pause();
      audio2.pause();
    } else{
      console.log("start")
      // audio1.play();
      if(bpm==0||isNaN(bpm)){
        setBpm(60) 
        console.log("0 or NaN")  
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleBpmChange =(e)=>{
    /*
    const newBpm = parseInt(e.target.value);
    */
   var timer=null;
    const shouldUpdate = e.target.value.length < 4
    // var newBpm
   
    var newBpm
    if(shouldUpdate){
      newBpm = e.target.value;
    } 
    //const newBpm=e.target.value
    

    if(!isNaN(parseInt(newBpm))){
      if(isNaN(parseInt(newBpm))){
        setBpm(0)
      }
      setBpm(parseInt(newBpm));
      //console.log('newBPM')
    }
    else if(newBpm===''){
      setBpm('')
      timer=setInterval(()=>{setBpm(0)},3000)
      clearInterval(timer)
      
      //console.log("' blank '")
    }
    else if (isNaN(parseInt(newBpm))){
      setBpm(0)
      //console.log("isnan")
    }
  };
  return(
    <div>
      <button ref={buttonA} onClick={toggleSound} style={{backgroundColor:"silver",borderColor: "grey",margin:"0px"}}>
        {isPlaying? 'Stop Sound':'Play Sound'}
      </button>
      <input
        ref={inputArea}
        type="text"
        value={bpm}
        onChange={handleBpmChange}
        pattern="[0-9]*"
        inputMode="numeric"
        style={{width:"30px",borderColor:"grey",backgroundColor:"silver",textAlign:'center'}}
      />
    </div>
  );
};
export default App;