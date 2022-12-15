document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.querySelector('.user-form');
  const userReplyFromServer = document.querySelector('.user-reply__server-data');
  const userName = document.querySelector('.user-from__name');
  const userPhone = document.querySelector('.user-from__phone');

  const request = new XMLHttpRequest();

  function getInputValue (input) {
    if(!input) {
      alert('Будь ласка, додайте данні до форми');
    } else {
      return input
    }
  }

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let nameForSaving = getInputValue(userName.value);
    let userPhoneForSaving = getInputValue(userPhone.value);

    if(nameForSaving && userPhoneForSaving) {
      console.log(nameForSaving, userPhoneForSaving);


      userReplyFromServer.classList.add('user-reply__server-data-active');
    }
  })
})

















// document.addEventListener('DOMContentLoaded', () => {
//   const textToSend = document.querySelector('.textToSend');
//   const sendForm = document.querySelector('.sendForm');
//   const userReply = document.querySelector('.user-reply');

//   const req = new XMLHttpRequest();

//   function getText () {
//     return textToSend.value
//   }

//   function getServerResponse (data) {
//     console.log(data);

//     userReply.textContent = data;
//   }

//   function sendRequest (dataToSend, input) {
//     req.onreadystatechange = function () {
//       if(this.readyState == 4 && this.status == 200) {
//         getServerResponse(this.responseText);
//       }
//     }

//     req.open('GET', `http://contact-form.my/index2.php?${input}=${dataToSend}`);

//     req.send();
//   }

//   sendForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let text = getText();
//     let inputName = textToSend.getAttribute('name')

//     sendRequest(text, inputName);
//   })
// })