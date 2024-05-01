/**
 * Stores a toast message and its type (success or failure) in sessionStorage.
 * Calls showStoredToast to display the stored toast message.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @param {boolean} isSuccess - Indicates whether the toast message is a success message.
 */
function showToast(message, isSuccess) {
  sessionStorage.setItem('toastMessage', message);
  sessionStorage.setItem('toastType', isSuccess ? 'success' : 'failure');
  showStoredToast();
}

/**
 * Displays the stored toast message from sessionStorage.
 * Removes the message and its type from sessionStorage after displaying it.
 */
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
