let count = 1;
document.getElementById("radio-1").checked = true;

setInterval(function(){
    nextImage();
}, 4500)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio-"+count).checked = true;
}

if(count = 1){
   let radio = document.getElementById('one');
   radio.style.backgroundColor = '#fff';
} 
else if (count = 2){
    let radio = document.getElementById('two');
    radio.style.backgroundColor = '#fff';
}
