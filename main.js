//For submitting the response
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

//Floating action button
function actionToggle(){
  var action = document.querySelector('.scroll-up');
  action.classList.toggle('active')
}

//Hide navbar on scrolling down and show navbar on scrolling up
var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navtoggle").style.top = "0";
    } else {
      document.getElementById("navtoggle").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
