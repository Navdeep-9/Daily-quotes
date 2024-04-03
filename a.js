
let quotebox = document.getElementById("quotebox")
let ShowAuthor = document.getElementById("author")
let span = document.getElementsByTagName("SPAN")
let mainQuote = document.getElementById('quote')
let heading = document.getElementById("heading")

function updateTimeGreeting() {
  var now = new Date();
  var hour = now.getHours();

  var greeting = "";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning buddy";
    document.body.style.backgroundImage = 'URL(b6.jpg)';
    quotebox.style.backgroundImage = 'URL(mrngbox.jpg)'
    quotebox.style.opacity = '.8';
    ShowAuthor.style.color = 'whitesmoke';
    ShowAuthor.style.fontWeight = '900';
    
  } else if (hour >= 12 && hour < 16) {
    greeting = "Good afternoon pal";
    document.body.style.backgroundImage = 'URL(afternoonbox.jpg)'
    quotebox.style.backgroundImage = 'URL(afternoonb1.jpg)'
    quotebox.style.opacity = '.9';
    ShowAuthor.style.color = 'orange';
    mainQuote.style.opacity = '2.1'
    mainQuote.style.color = 'orange'

    
  } else if (hour >= 16 && hour < 19) {
    greeting = "Good evening dude";
    document.body.style.backgroundImage = 'URL(sunset.jpg)'
    quotebox.style.backgroundImage = 'URL(beach.jpg)'
    quotebox.style.opacity = '0.5'
    ShowAuthor.style.color = 'yellow';
    mainQuote.style.opacity = '2.1'
    mainQuote.style.color = 'yellow'
    heading.style.opacity = '2.1'
  } else {
    greeting = "Good night mate";
    document.body.style.backgroundImage = 'URL(night.jpg)'
    quotebox.style.backgroundImage = 'URL(bgnight.jpg)'
    quotebox.style.opacity = '0.9'
    quotebox.style.color = 'white';
    ShowAuthor.style.color = 'white'
  }

  document.getElementById("timeGreeting").innerHTML = greeting;
}

// Update greeting initially
updateTimeGreeting();

// Update greeting every minute
setInterval(updateTimeGreeting, 60000);
