var player = require('play-sound')(opts = {})
var readline = require('readline')

function playBeat(fileName){
    player.play(fileName,function(err){
        if (err) {
            console.error(err)
        }
        else{
            void(0)
        }
})}

function bpmToMS(bpm){
    return Math.round(60000/bpm)
}

count=0
bpm=60
if(process.argv[2]==undefined){
    bpm=60
}
else{
    bpm=process.argv[2]
}
function metro()
{    
    count+=1
    process.stdout.write("\u001b[2J\u001b[0;0H")
    if(count==1){
        console.log(count + " strong")
        playBeat("strong_pulse.wav")
    }
    else{
        console.log(count)
        playBeat("weak_pulse.wav")
    }
    if (count==4){
        count=0
    }
    setTimeout(metro,bpmToMS(bpm))
}

readline.emitKeypressEvents(process.stdin)
if(process.stdin.isTTY)
    process.stdin.setRawMode(true)
    process.stdin.on("keypress",(chunk,key)=>{
        if(key.name == 'escape'){
            process.stdout.write("\u001b[2J\u001b[0;0H")
            process.exit()
        }
    })
console.log("Press ESC to end program")
setTimeout(()=>{
    metro()
},3000)


