const menuList = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburger");

document.onclick = function (e) {
  //close menuList and hamburger come back to normal status
  if (e.target.id !== "menu" && e.target.id !== "hamburger") {
    hamburgerBtn.classList.remove("active");
    menuList.classList.remove("active");
  }
};

//when clicking hamburger button, you open menuList and hamburger get crossed
hamburgerBtn.onclick = function () {
  hamburgerBtn.classList.toggle("active");
  menuList.classList.toggle("active");
};

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-gallery img");
const fullImage = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const closeBtn = document.querySelector(".close-btn");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    fullImage.classList.add("open");
    //change image
    const originalSrc = preview.getAttribute("src");
    fullImage.src = originalSrc;
    //change text
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

closeBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});


//// toggle chat box

let isChatBox1Active = false;

function toggleChatBox() {
    const chatBox = document.querySelector('.chat-box');
    const whatsappIcon = document.querySelector('.whatsapp-icon');
    const textMessageIcon = document.querySelector('.text-message-icon');
    const crossIcon = document.querySelector('.cross-icon');
    
    chatBox.classList.toggle('active');
    whatsappIcon.classList.toggle('active');
    textMessageIcon.classList.toggle('active');
    crossIcon.classList.toggle('active');
    
    isChatBox1Active = !isChatBox1Active;
}

function resetChatBox() {
    const chatBox = document.querySelector('.chat-box');
    const whatsappIcon = document.querySelector('.whatsapp-icon');
    const textMessageIcon = document.querySelector('.text-message-icon');
    const crossIcon = document.querySelector('.cross-icon');
    
    chatBox.classList.remove('active');
    whatsappIcon.classList.remove('active');
    textMessageIcon.classList.remove('active');
    crossIcon.classList.remove('active');
    
    isChatBox1Active = false;
}

function fallbackTextMessage() {
  // Provide instructions or a fallback action here
  alert("To send a text message, open your messaging app and enter the number manually.");
}
/////// slider functionality

// document.addEventListener("DOMContentLoaded", function() {
//   const wrapper = document.querySelector('.wrapper');
//   const cards = document.querySelectorAll('.card');

//   let currentIndex = 0;
//   const cardSetWidth = wrapper.clientWidth / 3; // Width of the set of three cards

//   // Function to show the next set of cards
//   function showNext() {
//       if (currentIndex < cards.length / 3 - 1) {
//           currentIndex++;
//           wrapper.style.transform = `translateX(-${currentIndex * cardSetWidth}px)`;
//       }
//   }

//   // Function to show the previous set of cards
//   function showPrevious() {
//       if (currentIndex > 0) {
//           currentIndex--;
//           wrapper.style.transform = `translateX(-${currentIndex * cardSetWidth}px)`;
//       }
//   }

//   // Add click event listeners to navigate
//   document.querySelector('.container').addEventListener('click', function(event) {
//       if (event.target.classList.contains('next')) {
//           showNext();
//       } else if (event.target.classList.contains('prev')) {
//           showPrevious();
//       }
//   });
// });





// const wrapper = document.querySelector('.wrapper');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let slideIndex = 0;

// prevBtn.addEventListener('click', () => {
//     if (slideIndex > 0) {
//         slideIndex--;
//         wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (slideIndex < wrapper.children.length - 1) {
//         slideIndex++;
//         wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const cardsWrapper = document.querySelector('.wrapper');
//     const cards = document.querySelectorAll('.card');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     let currentIndex = 0;

//     function showCard(index) {
//         cardsWrapper.style.transform = `translateX(-${index * 100}%)`;
//     }

//     function slideNext() {
//         if (currentIndex === cards.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//         showCard(currentIndex);
//     }

//     function slidePrev() {
//         if (currentIndex === 0) {
//             currentIndex = cards.length - 1;
//         } else {
//             currentIndex--;
//         }
//         showCard(currentIndex);
//     }

//     // Show initial card
//     showCard(currentIndex);

//     // Event listeners for navigation buttons
//     nextButton.addEventListener('click', slideNext);
//     prevButton.addEventListener('click', slidePrev);

//     // Keyboard navigation
//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'ArrowRight') {
//             slideNext();
//         } else if (event.key === 'ArrowLeft') {
//             slidePrev();
//         }
//     });
// });


 let scrollcontainer = document.querySelector(".card-wrap");
 let backbtn = document.getElementById("pre");
 let nxtbtn = document.getElementById("nxt");


 scrollcontainer.addEventListener("wheel",(evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.style.scrollBehavior = "auto" 
 });

 nxtbtn.addEventListener("click" , ()=>{
  scrollcontainer.style.scrollBehavior = "smooth" 
  scrollcontainer.scrollLeft += 1290;
 });

 backbtn.addEventListener("click" , ()=>{
  scrollcontainer.style.scrollBehavior = "smooth" 
  scrollcontainer.scrollLeft -= 1290;
 });



const scriptURL =
  "https://script.google.com/macros/s/AKfycbyFWhCpQGbeDnRH6vDQki0quXln0Ll4wrjfb8xtahV4CiYhRU6uHZq9ZUvrMJFs7UE5Sw/exec";
const form = document.forms["form-data"];

form.addEventListener("submit",(e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      // alert("Thanks for Contacting us..!")
      swal("Submit.", "Thanks for Contacting us..!", "success")
    )
    .catch((error) => console.error("Error!", error.message));
});


