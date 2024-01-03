let status = {
  show: false,
  data: false,
};

let listeners = [];

export const handlePopup = {
  showPopup(data) {
    status = {
      show: true,
      data: { ...data },
    };
    emitChange();
  },

  hidePopup() {
    status = {
      show: false,
      data: false,
    };
    emitChange();
  },

  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  getSnapshot() {
    return status;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}


