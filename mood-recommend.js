function recommendMovie() {
  const mood = document.getElementById("mood-select").value;
  const result = document.getElementById("recommendation");
  let message = "";
  switch (mood) {
    case "happy":
      message = "Try 'La La Land' – bright and joyful!";
      break;
    case "sad":
      message = "Watch 'Coco' – emotional and healing.";
      break;
    case "romantic":
      message = "Go for 'Flipped' – sweet and nostalgic.";
      break;
    case "funny":
      message = "'Deadpool' is sure to make you laugh!";
      break;
    default:
      message = "Please select a mood.";
  }
  result.innerText = message;
}
