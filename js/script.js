document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.querySelector('.user-form');
  const userReplyFromServer = document.querySelector('.user-reply__server-data');


  userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    userReplyFromServer.classList.add('user-reply__server-data-active');
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