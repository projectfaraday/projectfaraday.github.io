
function lol(){
    t = document.getElementById('1').value 
    //sha2 the t and check a part of that for the url ig that should work client side
    let hash = CryptoJS.SHA256(t)
    let enc = hash.toString(CryptoJS.enc.Hex)
    let enc1 = enc.slice(0, 42)
    if (enc1 == 'c7c9744ef928472943951a851c16372852a544973f'){
        s1 = t + enc 
        document.getElementById('1').value = 'txti.es/'+ s1        
    }
    else{
        document.getElementById('1').value = "that ain't right"
    }
}
//so you've reached the unchartered territories..
//200 bucks gpay if you can reverse engineer the passcode
//dm me if you do
//-aaradhya 
