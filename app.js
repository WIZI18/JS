var para = document.getElementById("para")
var bold = document.getElementById("bold")
var italic = document.getElementById("italic")
var underline = document.getElementById("underline")
var colorPicker = document.getElementById("colorPicker")
var size = document.getElementById("size")
var sizes = document.getElementById("size")
function booooold(){
    if(para.style.fontWeight == "bold"){
        para.style.fontWeight = ""
    }else{
        para.style.fontWeight = "bold"
    }
}
function italiccc(){
    if(para.style.fontStyle == "italic"){
        para.style.fontStyle = ""
    }else{
        para.style.fontStyle = "italic"
    }
}
function underLining(){
    if(para.style.textDecoration == "underline"){
        para.style.textDecoration = ""
    }
    else{
        para.style.textDecoration = "underline"
    }
}
function fontSizeee(){
    para.style.fontSize = sizes.value
}
function colorPickerr(){
    para.style.color = colorPicker.value
}