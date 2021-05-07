const nameField = document.querySelector('input');
const signUp = document.querySelector('#btn');

nameField.addEventListener('input', () => {
  nameField.setCustomValidity('');
  nameField.checkValidity();
  console.log(nameField.checkValidity());
});

nameField.addEventListener('inalid', () => {
  nameField.setCustomValidity('Please fill in this field!')
});

const form = document.querySelector('.form');
const firstname = document.querySelector('#exampleInputFirstName');
const lastname = document.querySelector('#exampleInputLastName');
const favouriteclub = document.querySelector('#exampleInputFaveClub');
const age = document.querySelector("#exampleInputAge");
const level = document.querySelector('#exampleInputLevel');

const clubMembers = [];

function updateData(e) {
  e.preventDefault();

  const person = {
    firstname: firstname.value,
    lastname: lastname.value,
    favouriteclub: favouriteclub.value,
    age: age.value,
    level: level.value,
  };

  // const myJson = JSON.stringify(person);
  clubMembers.push(person);

  console.log(clubMembers);

  form.reset();

  let data = '';

  clubMembers.forEach((person) => {
    data += `<tr>
                <td> ${person.firstname} </td>
                <td> ${person.lastname} </td>
                <td> ${person.favouriteclub} </td>
                <td> ${person.age} </td>
                <td> ${person.level} </td>
                <td> <button onClick = "removePerson(event)" class = "but"> Remove User</button> </td>
             </tr>`;
  });

  document.getElementById('rest').innerHTML = data;

}

function removePerson(event){
  const row = event.target.parentElement.parentElement;
  row.remove();
}

form.addEventListener('submit', updateData);
