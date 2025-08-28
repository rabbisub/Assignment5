
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
//paste update 
function pastCount(id){
document.getElementById('nav-copy-count').innerText=id
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




/////////////////////////////////////1st card all features/////////////////////////////



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



////////Paste Button
document.getElementById('nationalEcopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('nationalEnumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})


//////////////////////////////////////////2nd card/////////////////////
// heart counting 
document.getElementById('policHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('policecallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('policeNumber')
    const name=innerText('policeText')
     
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



////////Paste Button
document.getElementById('policeCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('policeNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////3rd card/////////////////////
// heart counting 
document.getElementById('fireHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('fireCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('fireNumber')
    const name=innerText('fireText')
     
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



////////Paste Button
document.getElementById('fireCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('fireNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////4th card/////////////////////
// heart counting 
document.getElementById('ambulanceHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('ambulanceCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('ambulanceNumber')
    const name=innerText('ambulanceText')
     
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



////////Paste Button
document.getElementById('ambulanceCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('ambulanceNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////5th card/////////////////////
// heart counting 
document.getElementById('wcHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('wcCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('wcNumber')
    const name=innerText('wcText')
     
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



////////Paste Button
document.getElementById('wcCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('wcNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////6th card/////////////////////
// heart counting 
document.getElementById('acHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('acCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('acNumber')
    const name=innerText('acText')
     
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



////////Paste Button
document.getElementById('acCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('acNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////7th card/////////////////////
// heart counting 
document.getElementById('electricityHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('electricityCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('electricityNumber')
    const name=innerText('electricityText')
     
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



////////Paste Button
document.getElementById('electricityCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('electricityNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})
//////////////////////////////////////////8th card/////////////////////
// heart counting 
document.getElementById('bracHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('bracCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('bracNumber')
    const name=innerText('bracText')
     
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



////////Paste Button
document.getElementById('bracCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('bracNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})

//////////////////////////////////////////9th card/////////////////////
// heart counting 
document.getElementById('railHeartBtn').addEventListener('click',function(e){
    e.preventDefault()
    const heartCount= innerTextInt('nav-heart-count')
    const updateCount = heartCount + 1
    heartCountUpdate(updateCount)


})

//calling button 
document.getElementById('railCallBtn').addEventListener('click',function(e){
    e.preventDefault()

    const callingToken=innerTextInt('nav-token-count')
    const number= innerText('railNumber')
    const name=innerText('railText')
     
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



////////Paste Button
document.getElementById('railCopyBtn').addEventListener('click',function(e){
    e.preventDefault()
    const navCopy=innerTextInt('nav-copy-count')
    const copyText=innerText('railNumber')
    navigator.clipboard.writeText(copyText)
    alert("Copied " + copyText);

    const copy= navCopy + 1
    pastCount(copy)

})




