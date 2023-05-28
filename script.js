const container = document.getElementById("container");
const rows = document.getElementsByClassName("row");
const ceils = document.getElementsByClassName("ceil");

function createRows(rowSize, columnSize){
    let singleRow;
    for(let i = 1; i <= rowSize; i++){
        singleRow = document.createElement("div");
        // singleRow.textContent = `row ${i}`;
        for(let j = 1; j <= columnSize; j++){
            let singleCol = document.createElement("div");
            singleCol.textContent = `ceil ${i}, ${j}`;
            singleRow.appendChild(singleCol).className = "ceil";
        }
        container.appendChild(singleRow).className = "row";
        console.log(singleRow);
    }
}

createRows(16, 16);
