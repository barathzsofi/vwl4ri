//Viewmodel réteg
var statusTexts = {
    'new': 'Új kérés',
    'assigned': 'Keresés alatt',
    'ready': 'Átvehető',
    'rejected': 'Kért könyv nem található',
    'pending': 'Felfüggesztve',
};
var statusClasses = {
    'new': 'danger',
    'assigned': 'info',
    'ready': 'success',
    'rejected': 'default',
    'pending': 'warning',
};

function decorateBooks(bookContainer) {
    return bookContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}

module.exports = decorateBooks;