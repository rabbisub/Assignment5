
const callHistoryUpdate=[]


// getting innerText to int value 

function innerTextInt(id){
    return parseInt(document.getElementById(id).innerText)
}

// get inner text 
function innerText(id){
    return document.getElementById(id).innerText
}

 // heart count function 
function heartCountUpdate(id){
    document.getElementById('nav-heart-count').innerText=id
}

////////////////////////////////// history up function /////////////////////////////
function updateHistory(){
const time= new Date();
const history=document.getElementById('historyUp')
const data=callHistoryUpdate[callHistoryUpdate.length-1]
if(data){
    const div=document.createElement('div')
            div.innerHTML=`
            <div class="flex justify-between items-center border-2 rounded-5 border-white  pl-5 pr-5 bg-[#fafafa]">
                        <div>
                            <p class="w-[215px] text-[18px] font-[600]">${data.name}</p>
                            <p class="text-[18px] font-[400] text-gray-500">${data.number}</p>
                        </div>
                            <p class="text-[18px] font-[400] text-black">${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                    </div>
            
            `
            history.appendChild(div)
            
}        
}


///////////////////////////////////clear history ///////////////////////////////////
document.getElementById('clearHistoryBtn').addEventListener('click',function(e){
    e.preventDefault()
    const history=document.getElementById('historyUp')
    while (history.children.length > 1) {
        history.removeChild(history.lastChild);
    } 
    callHistoryUpdate.length = 0

    
})



/////////////////////////////////////first card all features/////////////////////////////



// heart counting 
document.getElementById('nationalEnumberBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})



//calling button 
document.getElementById('nationalEcallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('nationalEnumber')
    const name=innerText('nationalEnumberText')
     
    if(callingToken<20){
        alert(" You don not have enough token to call")
    
    }else{

        const updateCallingToken= callingToken - 20
        document.getElementById('nav-token-count').innerText=updateCallingToken
        alert(`${name} ${number}`);

        const data={
        name: name,
        number: number
    }
  
    callHistoryUpdate.push(data)
    
    updateHistory()
    
    }   
        
})





