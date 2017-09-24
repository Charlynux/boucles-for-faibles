import './numbers';
import './students';

/// Dirty-Dirty router
function router() {
    var url = location.hash.slice(1) || '/';

    if (url === '/ltacademy') {
        document.getElementById("ltacademy")
                .style.display = "block";
        document.getElementById("numbers")
                .style.display = "none";
    } else {
        document.getElementById("numbers")
            .style.display = "block";
        document.getElementById("ltacademy")
            .style.display = "none";
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
