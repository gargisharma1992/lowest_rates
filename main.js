/**
 * Adding new items to the menu list
 */
function addNewItemsToList() {
    const ul = document.getElementById('menu_list');

    // List of new menu itesm
    var newMenuItems = ['Loans', 'Finance', 'Debt'];

    for (var i = 0; i < newMenuItems.length; i++) {
        // Create new LI
        var li = document.createElement("li");
        var a = document.createElement('a');

        a.className = "menu__item";
        a.href = '#';
        a.innerText = newMenuItems[i];

        // Append the new li
        li.appendChild(a);

        // Add to list
        ul.appendChild(li);
    }
}

/**
 * Scroll to the bottom of the page when clicking on Login 
 */
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

/**
 * Resetting the original list when user closes the menu
 */
function closeBar() {
    var menuList = document.getElementById("menu_list");
    
    menuList.querySelectorAll('li').forEach(function (item) {
        if (item.innerText === "Loans" || item.innerText === "Finance" || item.innerText === "Debt") {
            item.remove();
        }     
    });

    window.location.reload();
};
