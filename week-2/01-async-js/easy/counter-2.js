let counter = 0;


function inrement(){
    console.log(counter++);
    setTimeout(inrement, 1000);
}

inrement()