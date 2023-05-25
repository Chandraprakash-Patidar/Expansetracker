// var form = document.getElementById('expense')
// form.addEventListener('submit', addUser)

// //add Expanse
// function addExpanse(e) {
//   e.preventDefault();
//   // get input value
//   var expanceAmount = document.getElementById('expense-amount').value;
//   var description = document.getElementById('Description').value;
//   var category = document.getElementById('expense-category').value;
//   // create new list
//   var li = document.createElement('li')
//   li.style.listStyleType = 'disc';
//   // add id
//   li.id = 'item';
//   // add text node with input value
//   li.appendChild(document.createTextNode(expense-amount + '  '))
//   li.appendChild(document.createTextNode(Description + '  '))
//   li.appendChild(document.createTextNode(expense-category + '  '))
//   //get element by id
//   var userList = document.getElementById('user-list')
//   // push list in ul

//   userList.appendChild(li);
//       li.remove();
//   });
//   li.appendChild(deleteBtn)

//   //add edit button 
//   var editBtn=document.createElement('input');
//   editBtn.type='button';
//   editBtn.value='Edit';
//   editBtn.addEventListener('click',function(){
//     localStorage.removeItem(newEmail)
//     li.remove();
//     var edit=document.getElementById('Description')
//     edit.style.border='2px solid black'
//     edit.focus();
//   });
//   li.appendChild(editBtn)
//   var addExpanse =
//   {
//     name: addExpanse,
//   localStorage.setItem(newEmail, addExpanse_sri);
//   console.log(localStorage)
// }

// var form = document.getElementById('expense');
// form.addEventListener('submit', addExpense); // corrected function name to addExpense

// //add Expense
// function addExpense(e) { // corrected function name to addExpense
//   e.preventDefault();
//   // get input value
//   var expenseAmount = document.getElementById('expense-amount').value; // corrected variable name to expenseAmount
//   var description = document.getElementById('Description').value; // corrected variable name to description
//   var category = document.getElementById('expense-category').value; // corrected variable name to category

//   // create new list item
//   var li = document.createElement('li');
//   li.style.listStyleType = 'disc';
//   // add id
//   li.id = 'item';
//   // add text node with input value
//   li.appendChild(document.createTextNode(expenseAmount + '  ')); // corrected variable name to expenseAmount
//   li.appendChild(document.createTextNode(description + '  ')); // corrected variable name to description
//   li.appendChild(document.createTextNode(category + '  ')); // corrected variable name to category

//   //get element by id
//   var expenseList = document.getElementById('expense-list'); // corrected variable name to expenseList
//   // push list item in ul
//   expenseList.appendChild(li);

//   // Save expense to local storage
//   var newExpense = {
//     expenseAmount: expenseAmount, // corrected variable name to expenseAmount
//     description: description, // corrected variable name to description
//     category: category // corrected variable name to category
//   };
//   localStorage.setItem('newExpense', JSON.stringify(newExpense));
//   console.log(localStorage);
// }

var form = document.getElementById('expense');
form.addEventListener('submit', addExpense);

//add Expense
function addExpense(e) {
  e.preventDefault();
  // get input value
  var expenseAmount = document.getElementById('expense-amount').value;
  var description = document.getElementById('Description').value;
  var category = document.getElementById('expense-category').value;
  // create new list
  var li = document.createElement('li');
  li.style.listStyleType = 'disc';
  // add id
  li.id = 'item';
  // add text node with input value
  li.appendChild(document.createTextNode(expenseAmount + '  '));
  li.appendChild(document.createTextNode(description + '  '));
  li.appendChild(document.createTextNode(category + '  '));
  //get element by id
  var userList = document.getElementById('user-list');
  // push list in ul
  userList.appendChild(li);

  // add delete button
  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
  li.appendChild(deleteBtn);

  // add edit button
//   var editBtn = document.createElement('button');
//   editBtn.innerHTML = 'Edit';
//   editBtn.addEventListener('click', function() {
//     var oldDescription = description;
//     var newDescription = prompt("Enter new description:", oldDescription);
//     if (newDescription === null || newDescription === '') {
//       return;
//     }
//     description = newDescription;
//     li.childNodes[1].textContent = description + '  ';
//   });
//   li.appendChild(editBtn);
// }


 var editBtn=document.createElement('input');
  editBtn.type='button';
  editBtn.value='Edit';
  editBtn.addEventListener('click',function(){
    localStorage.removeItem(newEmail)
    li.remove();
    var edit=document.getElementById('Description')
    edit.style.border='2px solid black'
    edit.focus();
  });
  li.appendChild(editBtn)
}
