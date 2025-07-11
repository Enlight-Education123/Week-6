//console.log("Hello World!")
//TO RUN THIS FILE
//open in browser, right click and inspect

document.addEventListener("DOMContentLoaded", () => {
  //Add Item Implementation Code here

  // Add task function with delete button
  //This function will make more sense when you add the other code
  function addTask(taskText) {
    const li = document.createElement("li"); //creates a new element that will hold the task text

    // Task content
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span); //adds the span with the task text inside the li so that li now contains that info

    // Delete button
    const btn = document.createElement("button"); //creates a button element
    btn.textContent = "❌";
    btn.style.float = "right";
    btn.style.border = "none";
    btn.addEventListener("click", () => { //adds a click event listener
      //removes the whole li
      li.remove()
      //AFTER YOU HAVE ADDED CODE BELOW to update and save the current state of the list 
      saveList();
    });
    li.appendChild(btn); //adds the delete button to li
    list.appendChild(li); //adds the contructed li to the list 
  }

  //Add localStorage Implementation code here

  // Enable drag-and-drop sorting
  new Sortable(list, {
    animation: 150,
    ghostClass: 'ghost'
  });
});
