const audio1 = new Audio("hj.mp3");
const audio2 = new Audio("hl.mp3")

function playAudio() {
  audio1.play();
  audio1.onended = function() {
    audio2.play();
  }
}

// Buka tutup modal
function openNote() {
  document.getElementById("noteModal").style.display = "block";
}

function closeNote() {
  document.getElementById("noteModal").style.display = "none";
}