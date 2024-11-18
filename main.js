let data;
const dataTemplate = {
  "Emotion" : 'unset',
  "Reason" : 'unset'
}
const currDate = new Date();
const currDateFormated = (currDate.getDate().toString() + '/' + currDate.getMonth().toString()+ '/' + currDate.getFullYear().toString());
function load() {
  if(localStorage.getItem('data') !== null)
  {
    data = JSON.parse(localStorage.getItem('data'));
    if (data.hasOwnProperty(currDateFormated)) {
      document.getElementById("todaysEmotion").innerHTML = data[currDateFormated].Emotion;
      document.getElementById("todaysReason").innerHTML = data[currDateFormated].Reason;
    }
    let history;
    Object.values(data).forEach(value => {
      history += (value.Emotion + '<br/>' + value.Reason + '<br/>');
      document.getElementById("emotionHistory").innerHTML = history;
    })
  } else {
    data = {};
  }
}
load();
function save() {
  localStorage.setItem('data', JSON.stringify(data));
  if (data.hasOwnProperty(currDateFormated)) {
      document.getElementById("todaysEmotion").innerHTML = data[currDateFormated].Emotion;
      document.getElementById("todaysReason").innerHTML = data[currDateFormated].Reason;
    }
}  
function buttonClick(button) {
  alert(button.textContent)
  if (data.hasOwnProperty(currDateFormated)) {
    data[currDateFormated].Emotion = button.textContent;
    save();
  } else {
    data[currDateFormated] = dataTemplate;
    data[currDateFormated].Emotion = button.textContent;
    save();
  }
}
function inputClick() {
  var input = document.getElementById("reasonInput").value
  alert(input.textContent)
  if (data.hasOwnProperty(currDateFormated)) {
    data[currDateFormated].Reason = input.textContent;
    save();
  } else {
    data[currDateFormated] = dataTemplate;
    data[currDateFormated].Reason = input.textContent;
    save();
  }
}
