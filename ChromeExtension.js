let myLeads = [];
let oldleads = [];
const inputel = document.getElementById('input-el');
const inputbtn = document.getElementById("save-btn");
const ulel = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn");
const tabbtn = document.getElementById("tab-btn");
// localStorage.setItem("myLeads","www.example.com");
// // console.log(localStorage.getItem("myLeads"));
// localStorage.setItem("myLeads","https://www.linkedin.com/in/shikhar-sharma-68512b218/");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();
function renderFunction(Leads){
    let listitems = ""
    for(let i = 0; i < Leads.length; i++) {
        // const li = document.createElement("li")
        // li.textContent = myLeads[i];
        // ulel.append(li);   
        listitems += "<li><a href="+ Leads[i] +"target='_blank' rel='noopener noreferrer'>" +Leads[i] + "</a></li>";  
    }
    ulel.innerHTML = listitems
}
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalstorage);
if(leadsfromlocalstorage){
    myLeads = leadsfromlocalstorage;
    renderFunction(myLeads);
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({
        active:true,currentWindow:true},function(tabs){
            console.log(tabs);
    console.log(tabs[0].url);
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderFunction(myLeads); 
})
});

inputbtn.addEventListener("click",function(){

    // first method to push the value

    // 1 --  var x = document.getElementById("input-el").value;// myLeads.push(x);
    // or we can simply do 

    myLeads.push(inputel.value);
    renderFunction(myLeads);
    inputel.value = " "
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
})
deletebtn.addEventListener('click',function(){
    localStorage.clear();
    myLeads =[];
    renderFunction(myLeads);
})
