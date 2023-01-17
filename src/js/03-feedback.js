import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const localKey = 'feedback-form-state';

formEl.addEventListener('input', throttle(e => {
    const feedbackEl = {emailEl: emailEl.value, messageEl: messageEl.value};
    localStorage.setItem(localKey, JSON.stringify(feedbackEl));
}, 500)
);

formEl.addEventListener('submit', e => {
    e.preventDefault();
    console.log({emailEl: emailEl.value, messageEl: messageEl.value});
    formEl.reset();
    localStorage.removeItem(localKey);
});

const loadPage = key => {
    try {
        const storageBank = localStorage.getItem(key);
        return storageBank === null ? undefined : JSON.parse(storageBank);
    } catch (error) {
        console.error('Error :', error.message);
    }
};

const localDataEl = loadPage(localKey);
if (localDataEl) {
    emailEl.value = localDataEl.emailEl;
    messageEl.value = localDataEl.messageEl;
}