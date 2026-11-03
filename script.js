//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonContainer=document.getElementById("buttons");
let currentAudio=null;
sounds.forEach((sound)=>{
	const btn=document.createElement("button");
	btn.classList.add("btn");
	btn.innerText=sound;
	btn.addEventsListener("click",()=>{
		stopSongs();
		currentAudio=new Audio(`./sounds/${sound}.mp3`);
		currentAudio.play();
	});
	buttonContainer.appendChild(btn);
});
const stopBtn=document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText="stop";
stopBtn.addEventListener("click",()=>{
	stopSongs();
});
buttonContainer.appendChild(stopBtn);
function stopSongs(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
	}
}