const container = document.getElementById("issueContainer")
const tabs = document.querySelectorAll(".filter-btn");
const cardCount = document.querySelector(".card-count");

let issue = [];
fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res => res.json())
.then(data => {
    issue = data.issues || data;
     loadIssues(issues);
})
.catch(err => console.log(err));

                   
function loadIssues(data) {
    
    container.innerHTML = "";
    cardCount.innerText = data.length + " Issues"
    data.forEach(issue => {

        const borderColor = issue.status === "open"
        ? "border-green-500"
        : "border-purple-500"

        const card = `
        
        <div onclick="loadIssueDetails(${issue.id})" class="cursor-pointer bg-white p-4 rounded shadow border-t-4 ${borderColor}">

            <div class="flex justify-between mb-3">
            
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center "><i class="fa-solid fa-circle text-green-500 text-sm"></i>
            </div>

            <span class="bg-red-100 font-semibold  text-red-500 text-xs px-5 py-2 rounded-full">
            ${issue.priority}
            </span>
           
            </div>
            <h2 class="font-bold text-2xl mb-2">${issue.title}</h2>

            <p class="text-gray-500 text-sm mb-4">${issue.description.slice(0,80)}</p>

            <div class="flex gap-2 mb-4">

            <span class="border border-red-300 text-red-500 text-xs px-3 py-1 rounded-full">
            ${issue.label}
            </span>

            </div>
            <hr class="mb-3">

            <p>Status: ${issue.status}</p>

           

            <p>${issue.createdAt}</p>

            

        </div>
        `

        container.innerHTML += card
    })
}
// loadIssues(issues)
setActiveTab("all")

function loadIssueDetails(id) {
    const loader = document.getElementById("loader")
    loader.classList.remove("hidden")

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
        .then(res => res.json())
        .then(data => {
            const issue = data.issue || data;
            openModal(issue);
        })
    
        .catch(err => console.log(err))
         .finally(() => loader.classList.add("hidden"));
}

function setActiveTab(activeStatus) {
    tabs.forEach(tab => {
        tab.classList.remove("bg-blue-500", "text-white");
        tab.classList.add("bg-gray-200", "text-black");

        if(tab.dataset.status === activeStatus) {
            tab.classList.remove("bg-gray-200", "text-black");
            tab.classList.add("bg-blue-500", "text-white");
        }
    })
}


function filterIssue(status) {
    setActiveTab(status);

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

function openModal(issue) {
    const modal = document.getElementById("issueModal");

    document.getElementById("modalTitle").innerText = issue.title;
    document.getElementById("modalDesc").innerText = issue.description;
    document.getElementById("modalStatus").innerText = issue.status;
    document.getElementById("modalAuthor").innerText = issue.author || "Unknown";
    document.getElementById("modalPriority").innerText = issue.priority;
    document.getElementById("modalLabel").innerText = issue.label;
    document.getElementById("modalDate").innerText = issue.createdAt;


    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal () {
    const modal = document.getElementById("issueModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex")
}