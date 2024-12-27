function saklar() {
  let toggle=document.getElementById("AcceptConditions")
  let toggle2=document.getElementById("AcceptConditions2")
  let toggle3=document.getElementById("AcceptConditions3")
  let lampu1 = document.getElementById("lampu1")
  let lampu2 = document.getElementById("lampu2")
  let lampu3 = document.getElementById("lampu3")
  if (toggle.checked) {
      lampu1.src="assets/images/on.gif"
  } else{
    lampu1.src="assets/images/off.gif"
  }
  if (toggle2.checked) {
      lampu2.src="assets/images/on.gif"
  } else{
    lampu2.src="assets/images/off.gif"
  }
  if (toggle3.checked) {
      lampu3.src="assets/images/on.gif"
  } else{
    lampu3.src="assets/images/off.gif"
  }

  return lampu1
}