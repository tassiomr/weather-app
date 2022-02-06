const Geolocation = {
  getCurrentPosition: function (callback, error) {
    try {
      if (typeof callback !== 'function') {
        error('Get an error');
      }

      callback({ coords: { latitude: 1, longetude: 2 } });
    } catch (e) {
      throw e;
    }
  },
};

export default Geolocation;
