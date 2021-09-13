
function setTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var itemList = response;
            var setdata = "";
            
            for (var i = 0; i < itemList.length; i++) {
                setdata += `
                <tr>
                <td>${itemList[i].SLNo}</td>
                <td>${itemList[i].Name}</td>
                <td>${itemList[i].Quantity}</td>
                <td>${itemList[i].Unit}</td>
                <td>${itemList[i].Department}</td>
                <td>${itemList[i].Notes}</td>
              </tr>`;
            }
            var sethead = `<thead>
            <tr>
                <th>
                    <h1>SLNo.</h1>
                </th>
                <th>
                    <h1>Name</h1>
                </th>
                <th>
                    <h1>Quantity</h1>
                </th>
                <th>
                    <h1>Unit</h1>
                </th>
                <th>
                    <h1>Department</h1>
                </th>
                <th>
                    <h1>Notes</h1>
                </th>
            </tr>
        </thead>`;
            document.getElementById("cont").innerHTML = sethead;
            document.getElementsByClassName("table-inner")[0].innerHTML = setdata;
        }
    };
    xhttp.open("GET", "items.json", true);
    xhttp.send();
}
