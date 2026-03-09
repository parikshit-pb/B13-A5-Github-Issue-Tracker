const container = document.getElementById("issueContainer")

function loadIssues(data) {
    
    container.innerHTML = ""
    data.forEach(issue => {

        const borderColor = issue.status === "open"
        ? "border-green-500"
        : "border-purple-500"

        const card =
        <div class="bg-white p-4 rounded shadow border-t-4 ${borderColor}">

            <h2 class="font-bold text-lg ">${issue.title}</h2>

            <p class="">${issue.description}</p>

            <p>Status: ${issue.status}</p>

            <p>Category: ${issue.category}</p>

            <p>Author: ${issue.author}</p>

            <p>Priority: ${issue.priority}</p>

            <p>Label: ${issue.label}</p>

            <p>${issue.createdAt}</p>
            <p></p>

        </div>
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