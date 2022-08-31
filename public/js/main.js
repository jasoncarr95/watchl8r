// delete button is where every del span is (which is added to each item)
    // const deleteBtn = document.querySelectorAll('.del')

// Select all the checkboxes (1 for each item)
        // const checkboxes = document.querySelectorAll('.checkbox')

const item = document.querySelectorAll('.item span')
const itemCompleted = document.querySelectorAll('.item span.completed')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})

// async function deleteItem(){
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
//     try{
//         const response = await fetch('deleteItem', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'titleS': sName,
//               'birthNameS': bName
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }


async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}


const icons = {
    appleTV: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/appletv.svg",
    hboMax: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/hbo.svg",
    hulu: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/hulu.svg",
    netflix:"https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/netflix.svg",
    peacock: "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
    prime: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/primevideo.svg",
    other: ``,
}