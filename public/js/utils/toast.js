function showToast(message, isSuccess) {
  sessionStorage.setItem('toastMessage', message);
  sessionStorage.setItem('toastType', isSuccess ? 'success' : 'failure');
  showStoredToast();
}

function showStoredToast() {
  const message = sessionStorage.getItem('toastMessage');
  const type = sessionStorage.getItem('toastType');

  if (message && type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    toast.style.backgroundColor = type === 'success' ? 'green' : 'red';

    setTimeout(function () {
      toast.classList.remove('show');
      sessionStorage.removeItem('toastMessage');
      sessionStorage.removeItem('toastType');
    }, 2500);
  }
}

// Call showStoredToast when the page loads
document.addEventListener('DOMContentLoaded', showStoredToast);
