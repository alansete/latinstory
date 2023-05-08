const toggleMode = () => {
    const body = document.body;
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
  };
  
  document.getElementById("change-mode-button").addEventListener("click", toggleMode);
  