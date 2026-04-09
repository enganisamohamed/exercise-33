  function changeContent(){
            const header = document.querySelector("#head");
            header.textContent = "Welcome to the DOM!";
        }

        function changeElement(){
            const paragraph = document.querySelector(".paragraph"); // hal kaliya

            paragraph.innerHTML = "This content has been <strong>updated</strong>.";

        }
