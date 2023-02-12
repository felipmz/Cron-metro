let segu = 0
let minu = 0
let hr = 0
let pausameto
function comeca(){
    pausameto = setInterval(contar,1000)/*vai chamr a função contar a cada um segundo*/
}

function pausar(){
    clearInterval(pausameto)/*intervalo"pausar"*/
}
function parar(){
    segu = 0
    minu = 0
    hr = 0
    clearInterval(pausameto)/*intervalo*/
    document.getElementById('numero').innerText="00:00:00"

}


function contar(){
    segu++
    document.getElementById('numero').innerText=hr +":"+minu+":"+segu 
    if(segu == 60){
        minu ++
        segu = 0}
        if(minu == 60){
            hr ++
            minu = 0
            segu = 0
        }
    
}