import * as constants from '../constants';

export default {
  auth: {
    currently: constants.ANONYMOUS,
    displayName: 'guest',
    uid: null,
    email: null,
    imageURL: null
  },
  notification: {
    msg: null,
    title: null,
    msgType: constants.INFO
  },
  widgetList: {},
  manageGoal: {
    canSubmit: false,
    isVisible: false,
    model: {
      title: null,
      limit: null,
      value: 0,
      avatar: 'https://s-media-cache-ak0.pinimg.com/736x/12/f6/d1/12f6d18125126757df29e733051697b8.jpg',
      isDeleted: 0
    },
    errorMessages: {
      onlyNumeric: 'Please only numbers'
    }
  },
  confirmation: {
    isVisible: false,
    msg: 'Are you sure do you want to proceed?',
    title: 'Confirmation'
  }
};
