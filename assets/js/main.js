let taskInput = document.querySelector('.task')
const taskButton = document.querySelector('.addTaskButton')
const newTask = document.querySelector('.tasks-container')


const validateInput = () => taskInput.value.trim().length > 0


const handleAddTask = () =>{
    const inputIsValid = validateInput()


    if(!inputIsValid){
        return taskInput.classList.add('error')
        
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')
    taskContent.innerText = taskInput.value
    taskContent.addEventListener('click', () => handleTextClick(taskContent))

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa-solid')
    deleteItem.classList.add('fa-trash-can')
    deleteItem.addEventListener('click', () => handleDeleteTask(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    newTask.appendChild(taskItemContainer)

    taskInput.value = ''
}


const handleTextClick = (taskContent) => {
    const tasks = newTask.childNodes

    for(const task of tasks){
        const textClicked = task.firstChild === taskContent
        if(textClicked) {
            task.firstChild.classList.toggle('completed')
        }
    }
}


const handleDeleteTask = (taskItemContainer, taskContent) => {
    const tasks = newTask.childNodes

    for(const task of tasks){
        const deleteClicked = task.firstChild === taskContent
        if(deleteClicked) {
            taskItemContainer.remove()
        }
    }

}


const handleAddTaskChange = () => {
    const inputIsValid = validateInput()

    if(inputIsValid) {
        return taskInput.classList.remove('error')
    }
}

const deleteTask = () => {

}


taskButton.addEventListener('click', () => handleAddTask())
taskInput.addEventListener('change', () => handleAddTaskChange())

