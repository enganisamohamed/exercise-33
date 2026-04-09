

        function addItem(){
            const list = document.getElementById("myList");

            const newItem = document.createElement("li");
            newItem.textContent = "Item " 

            list.appendChild(newItem);

        }

        function removeItem(){
            const list = document.getElementById("myList");

            if(list.lastElementChild){
                list.removeChild(list.lastElementChild);
              
            } else {
                alert("List is empty!");
            }
        }