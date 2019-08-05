const mask = "+7 (___) ___-__-__",
input = document.getElementsByClassName('phone-input');
    

for (var i = 0; i < input.length; i++) { 

//фокус
input[i].addEventListener('focus', function(e) {
    
if(mask.length>this.value.length){
for (var i = 0; i < mask.length; i++) {

if(mask[i]=='_'){
e.preventDefault()
i_mask=save_mask=i
let th = this;
window.setTimeout(function() {
th.value= mask 
th.setSelectionRange(i_mask, i_mask);
}, 1);
return true
}
    
}
}
})
    

input[i].addEventListener("blur", function() {
for (var i = 0; i < mask.length; i++) {
this.value[i]=='_' ? this.value= '' : false
}  
});


input[i].addEventListener('click', function() {
(this.selectionStart>=save_mask) ? i_mask = this.selectionStart : false
})

  
if(window.screen.width>=1200){    
input[i].addEventListener('input', function(e) {
let th = this
step(th)
})
}

input[i].addEventListener('keydown', function(e) {
let th = this,
mask_number=true,
arrow=false;

if(e.keyCode==37){
e.preventDefault()
if (save_mask<i_mask) i_mask--
th.setSelectionRange(i_mask, i_mask);
mask_number=false
arrow=true
} 
else if(e.keyCode==39 && mask.length>i_mask){
e.preventDefault()
arrow=true
i_mask++
}   
else if(e.keyCode==8){
e.preventDefault()
window.setTimeout(function() {
if (i_mask==save_mask && window.screen.width>=1200){
th.value= mask
}
else if(i_mask==save_mask && window.screen.width<=1200) {
th.value= ''
th.blur()
return false
}              
else{
i_mask--
}
let mask_number=false
step_input(mask_number,th,arrow)
return false
}, 1);
}
else if(window.screen.width<=1200){
window.setTimeout(function() {
step(th)
}, 1);
}
    
step_input(mask_number,th,arrow)
})

function step(th){
if(+th.value[i_mask]  && mask.length>i_mask || th.value[i_mask]=='0' && mask.length>i_mask){
i_mask++
}  
let mask_number=true,
arrow = false
step_input(mask_number,th,arrow)
}
    

function step_input(mask_number,th,arrow){
if(arrow==false)th.value= th.value.substr(0, i_mask)+mask.substr(i_mask, mask.length)
th.setSelectionRange(i_mask, i_mask);    
    
if(mask[i_mask]!='_' && mask.length>i_mask){
(mask_number==true)? i_mask++ : i_mask--
step_input(mask_number,th,arrow)
} 
}  
  
}