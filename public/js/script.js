function fetchJSON() {
    fetch('../public/data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const unOrderedList = document.createElement("ul");
        data.forEach(obj => {            
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = obj.url; 
            link.textContent = obj.title;
            listItem.appendChild(link);
            unOrderedList.appendChild(listItem);
        });
       document.body.appendChild(unOrderedList);
    })
    .catch(error => console.log(error));
}
fetchJSON();

