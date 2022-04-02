(function () {
    var path = [];
    var clear = true;
    let tbody = document.querySelector("table tbody");
    let cells = document.querySelectorAll('td');
    let reloadBtn = document.querySelector('button');
    let last = document.querySelector('h1[id="last"]')
    reloadBtn.addEventListener('click', handleReload);
    tbody.addEventListener('click', handleClick)
    function handleClick(e) {
        if (!clear) {
            clearPrev(cells);
        }
        const sourceCell = e.target.closest('td');
        sourceCell.style.backgroundColor = 'black';
        let str = sourceCell.getAttribute('data');

        let x = parseInt(str[0]);
        let y = parseInt(str[1]);
        let path = handlePaths(x, y);
        for (let i = 0; i < path.length; i++) {
            var s = path[i].toString();
            s = s.substring(0, 1) + s.substring(2, 3);
            findTD(cells, s);

        }

        clear = false;
    }
    function handlePaths(x, y) {
        var path = [];
        if (x - 2 >= 0 && y + 1 < 8) {
            path.push([x - 2, y + 1]);
        }
        if (x - 1 >= 0 && y + 2 < 8) {
            path.push([x - 1, y + 2]);
        }
        if (x + 1 < 8 && y + 2 < 8) {
            path.push([x + 1, y + 2]);
        }
        if (x + 2 < 8 && y + 1 < 8) {
            path.push([x + 2, y + 1]);
        }
        if (x + 2 < 8 && y - 1 >= 0) {
            path.push([x + 2, y - 1]);
        }
        if (x + 1 < 8 && y - 2 >= 0) {
            path.push([x + 1, y - 2]);
        }
        if (x - 1 >= 0 && y - 2 >= 0) {
            path.push([x - 1, y - 2])
        }
        if (x - 2 >= 0 && y - 1 >= 0) {
            path.push([x - 2, y - 1])
        }


        return path;




    }
    function findTD(cells, s) {
        for (let j = 0; j < cells.length; j++) {
            var cell = cells[j];
            if (cell.getAttribute("data") == s) {
                cell.style.backgroundColor = 'rgb(238, 160, 160)';
            }

        }
    }
    function handleReload() {
        for (i of cells) {
            i.style.backgroundColor = 'cadetblue';
        }
    }
    function clearPrev(cells) {
        for (i of cells) {
            i.style.backgroundColor = 'cadetblue';
        }
        clear = true;
    }


})()