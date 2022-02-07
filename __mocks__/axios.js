import { Data } from './data';

export default {
  create: function () {
    return {
      get: param => Data,
      interceptors: {
        request: {
          use: function (req, error) {},
        },
        response: {
          use: function (req, error) {},
        },
      },
    };
  },
};
