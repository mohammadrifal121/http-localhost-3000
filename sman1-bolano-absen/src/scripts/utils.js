function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('id-ID', options).format(date);
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function clearLocalStorage(key) {
    localStorage.removeItem(key);
}

function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

function validateNISN(nisn) {
    const regex = /^[0-9]{4}$/;
    return regex.test(nisn);
}

export { formatDate, saveToLocalStorage, getFromLocalStorage, clearLocalStorage, generateUniqueId, validateNISN };