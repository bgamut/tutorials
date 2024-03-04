import React,{useState,useEffect,useCallback,useRef} from "react";
//import audio1add from "../assets/strong_pulse.wav"
//import audio2add from "../assets/weak_pulse.wav"
const App=()=>{
  const[isPlaying,setIsPlaying]=useState(false);
  const [bpm,setBpm]=useState(60);
  
  //const audio1 = new Audio(audio1add);
 // const audio2=new Audio(audio2add);
  var audio1 = new Audio("data:audio/wav;base64,UklGRmoDAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAATElTVBoAAABJTkZPSVNGVA0AAABMYXZmNjAuMy4xMDAAAGRhdGEkAwAAYBdGeo8CFYGeAa95UAGEhRwBbHbtAIiJvwArc5IAdY1oAPZvQABDkR4AxGwCAOqU7P+Ladz/ZJjT/0tm0P+1m9H/CGPW/+Oe3f/MX+X/+KHu/55c9v/8pP3/hFkDAPSnBwCCVgkA4KoKAJdTCgDBrQkAwVAHAJSwBQD+TQMAV7MCAEpLAAAJtv//pkj+/6m4/v8QRv7/N7v+/4lD/v+2vf//EkH//yTA//+qPv//g8L//1I8AADTxAAACToAABXHAADPNwAAR8kAAKQ1AABrywAAhzMAAIDNAAB5MQAAh88AAHkv//+A0QAAhy0AAGvT//+jK///SdX//80p//8Z1wAAAygAANvYAABHJgAAkdoAAJgkAAA53AAA9iIAANXdAABhIQAAZN8AANgf///n4P//Wx4AAF7iAADqHAAAyeMAAIUbAAAo5f//LBr//3vm///eGAAAxOcAAJwXAAAB6f//ZBb//zPq//84Ff//Wuv//xYU//927AAA/hIAAIjt///xEf//kO4AAO4QAACO7wAA9Q8AAIPwAAAGD///bfH//yAO//9O8v//RA3//ybzAABxDAAA9fMAAKYL//+79AAA5Qr//3j1//8sCv//LfYAAHsJAADZ9gAA0ggAAH73AAAyCAAAGvgAAJkH//+v+P//CAf//z35//9+BgAAw/kAAPwFAABC+v//gAX//7r6AAAMBf//K/v//54E//+W+///NgT///r7///VAwAAWfwAAHkDAACx/AAAJAP//wT9///UAgAAUf0AAIoCAACY/QAARQIAANv9AAAFAgAAGf4AAMkBAABR/v//kwH//4X+//9hAQAAtf4AADMBAADh/gAACgEAAAj/AADkAP//LP8AAMIAAABM////pAD//2n///+JAAAAgv8AAHEAAACZ/wAAXAAAAKz/AABKAAAAvf8AADoAAADM/wAALQAAANj///8iAAAA4v8AABkAAADq/wAAEQD///H///8MAP//9v///wcA///6/wAABAAAAPz/AAACAAAA/v8AAAEAAAD//wAAAAD/////AAAAAAAA//8AAAAA");
  var audio2 = new Audio("data:audio/wav;base64,UklGRmoDAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAATElTVBoAAABJTkZPSVNGVA0AAABMYXZmNjAuMy4xMDAAAGRhdGEkAwAAxArrV+l+qVeeAGGoT4bGqW4AD1TldthSSwDVrUmNKK8pAEVPhW8YTgwABbMIlES0+P+YSotobknu/923opoGue3/+UX+YdVE8v9kvBChfL35/3lByFthQP//ssA7p7/BAgAuPdNVJTwEANjEGa3bxQMAHTkZUCE4AgDUyK2yzMkAAD01oUpMNP//ocwBuI3N//+KMWtFpDD//z/QFr0g0f//Ai51QCct//+w0+3BhdT//6cqvjvXKQAA9taGxsDXAAB2J0M3sSYAABHa5MrS2gAAcCQDM7QjAAAD3QfPut0AAJIh/C7gIAAAzt/y0nrgAADbHiwrMx4AAHHiptYU4wAASxyTJ60b///u5CXah+X//+AZLyRLGf//Rudv3dfn//+aF/0gDhcAAHvpiOAD6gAAdxX+HfMUAACN62/jDOz//3YTLhv6Ev//fu0o5vXt//+VEYwYIhEAAE7vsui97wAA1Q8YFmoP///+8BHrZvH//zQOzxPQDQAAkfJF7fHy//+wDLARUwz//wb0UO9f9P//SQu5D/MK//9g9TPxsvX///0J6A2uCf//nvbx8un2///MCD0MgwgAAML3ivQI+AAAtAe2CnIHAADO+AD2DfkAALQGUAl4BgAAwvlV9/z5AADLBQsIlQUAAKD6i/jU+gAA+QTlBscEAABo+6L5lvv//zsE3AUPBAAAG/yc+kX8AACRA/AEagMAALz8fPvh/AAA+gIdBNcCAABK/UL8av0AAHUCYwNWAv//x/3w/OP9AAAAAsEC5QEAADT+h/1N/gAAmgE0AoMB//+S/gr+p/4AAEMBuwEwAQAA4v55/vT+AAD6AFUB6QD//yb/1v41////vAAAAa4A//9e/yT/av///4kAugB+AAAAi/9i/5X/AABhAIMAWAD//6//k/+3/wAAQQBXADoA///L/7n/0f8AACkANwAkAAAA3//V/+P/AAAYAB8AFAAAAO7/6P/w/wAADAAQAAoA///3//X/+f8AAAUABgAEAAAA/P/8//3///8BAAIAAQD/////////////AAAAAAAA////////AAD//wAA");

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