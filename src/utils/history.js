import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  getUserConfirmation(dialogKey, callback) {
    const dialogTrigger = window[Symbol.for(dialogKey)];

    if (dialogTrigger) {
      return dialogTrigger(callback);
    }

    return callback(true);
  },
});

export default history;
