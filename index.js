let number = "";

const press = (num) => {
  number = number + String(num);

  document.getElementById("result_form").value = number;
}

document.getElementById("clear_btn").onclick = () => {
  number = "";

  document.getElementById("result_form").value = number;
}

const calculate = () => {
  try {
    let total = String(eval(number));
    number = total;
  
    if (isNaN(total)) throw "error";

    document.getElementById("result_form").value = number;
  } catch {
    number = "error";

    document.getElementById("result_form").value = number;
  }
}
