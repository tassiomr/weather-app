const Geolocation = {
  getCurrentPosition: function (callback, error) {
    try {
      if (typeof callback !== 'function') {
        error('Get an error');
      }

      callback({ lat: 1, log: 2 });
    } catch (e) {
      throw e;
    }
  },
};

export default Geolocation;
