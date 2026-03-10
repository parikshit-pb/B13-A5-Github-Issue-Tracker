const container = document.getElementById("issueContainer")

function loadIssues(data) {
    
    container.innerHTML = ""
    data.forEach(issue => {

        const borderColor = issue.status === "open"
        ? "border-green-500"
        : "border-purple-500"

        const card = `
        
        <div class="bg-white p-4 rounded shadow border-t-4 ${borderColor}">

            <div class="flex justify-between mb-3">
            
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center "><i class="fa-solid fa-circle text-green-500 text-sm"></i>
            </div>

            <span class="bg-red-100 font-semibold  text-red-500 text-xs px-5 py-2 rounded-full">
            ${issue.priority}
            </span>
           
            </div>
            <h2 class="font-bold text-2xl mb-2">${issue.title}</h2>

            <p class="text-gray-500 text-sm mb-4">${issue.description}</p>

            <p>Status: ${issue.status}</p>

            <p>Category: ${issue.category}</p>

            <p>Author: ${issue.author}</p>

            <p>Priority: ${issue.priority}</p>

            <p>Label: ${issue.label}</p>

            <p>${issue.createdAt}</p>

             <p></p>

        </div>
        `

        container.innerHTML += card
    })
}
loadIssues(issues)


function filterIssue(status) {
    if(status === "all") {
        loadIssues(issues)
    }else{
        const filtered = issues.filter(issue => issue.status === status);
        loadIssues(filtered) 
    }
}

function searchIssue() {
    const text = document.getElementById("searchInput").value.toLowerCase()
    const result = issues.filter(issue => 
        issue.title.toLowerCase().includes(text)
    )
    loadIssues(result)
}

function showLoader(){
    const loader = document.getElementById("loader")
    loader.classList.remove("hidden")
    setTimeout(() => {
        loader.classList.add("hidden")
    },1000)
}

// function loadIssues(data) {
//     showLoader()
//     container.innerHTML = ""
//     data.forEach(issue => {
//         const borderColor = issue.status === "open"
//         `
//         <div class="bg-white p-4 rounded shadow">
//         <h2>${issue.title}</h2>
//         <p>${issue.description}</p>

//         </div>
//         `
//         container.innerHTML += card
//     })
// }