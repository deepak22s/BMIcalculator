document.getElementById("Height").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });

  document.getElementById("Weight").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });

  function processUserInput() {
    let Height = parseFloat( document.getElementById("Height").value);
    let Weight = parseFloat ( document.getElementById("Weight").value);

    
    let Height_m = Height / 100;

    if (isNaN(Height) || isNaN(Weight) || Height <= 0 || Weight <= 0) {
        document.getElementById("result").innerText = "Please enter valid height and weight.";
        return;
      }

    let BMI = Weight / (Height_m * Height_m);

    document.getElementById('BMI').textContent = "Your BMI is "+BMI;
    let category = "";
    if (BMI < 18.5) {
      category = " you are Underweight.";
    } else if (BMI >= 18.5 && BMI < 24.9) {
      category = "you BMI is pretty Normal.";
    } else if (BMI >= 25 && BMI < 29.9) {
      category = "you are Overweight.";
    } else {
      category = "you are Obese.";
    }
  document.getElementById('BMIDES').textContent = category;

    
  }