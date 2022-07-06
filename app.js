window.addEventListener("load", () => {
    const form = document.querySelector("form")
    const tasks = document.querySelector(".tasks")
    const addTaskInput = document.querySelector(".add-task-input")
    addTaskInput.addEventListener("input", () => {
        console.log(addTaskInput.value)
    })


    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const task = document.createElement("div")
        task.classList.add("task")
        const input = document.createElement("input")
        input.readOnly = true
        input.setAttribute("type","text")

        const actions = document.createElement("div")
        actions.classList.add("actions")

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.classList.add("edit-btn")

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")

        actions.appendChild(editBtn)
        actions.appendChild(deleteBtn)

        task.appendChild(input)
        task.appendChild(actions)

        if(!addTaskInput.value){
            alert("You must fill input")
        }else{
            input.value = addTaskInput.value
            tasks.appendChild(task)
            addTaskInput.value = ""
        }

        editBtn.addEventListener("click",()=>{
            if(editBtn.textContent === "Edit"){
                input.readOnly = false
                editBtn.textContent = "Save"
                input.focus()
            }
            else{
                editBtn.textContent = "Edit"
                input.readOnly = true
            }
        })

        deleteBtn.addEventListener("click",(e)=>{
            // const item = e.target.parentElement.parentElement
            // item.remove()
            tasks.removeChild(task)
        })
        
    })

})