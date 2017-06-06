// auth actions
export const ATTEMPTING_LOGIN = 'ATTEMPTING_LOGIN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';

//roles
export const RECEIVE_ROLELIST_DATA='RECEIVE_ROLELIST_DATA';
//users
export const RECEIVE_USERLIST_DATA='RECEIVE_USERLIST_DATA';

// auth states
export const LOGGED_IN = 'LOGGED_IN';
export const ANONYMOUS = 'ANONYMOUS';
export const AWAITING_AUTH_RESPONSE = 'AWAITING_AUTH_RESPONSE';
export const STARAGE_ID_KEY="cleanhand_AUTH_KEY_FOR_LOCAL_STORAGE";
export const STARAGE_TOKEN_KEY="cleanhand_AUTH_TOKEN_KEY_FOR_LOCAL_STORAGE";

// misc
export const FIREBASE = 'https://cleanhand-28a2f.firebaseio.com';

// notification
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SUCCESS = 'SUCCESS';
export const INFO = 'INFO';
export const WARNING = 'WARNING';
export const ERROR = 'ERROR';

// confirmation
export const CONFIRM = 'CONFIRM';
export const CONFIRM_CANCEL = 'CONFIRM_CANCEL';

// dashboard
export const INCREASE_WIDGET_VALUE = 'INCREASE_WIDGET_VALUE';
export const DECREASE_WIDGET_VALUE = 'DECREASE_WIDGET_VALUE';
export const RECEIVE_WIDGETLIST_DATA = 'RECEIVE_WIDGETLIST_DATA';

// manage goal
export const MANAGE_GOAL_SHOW = 'MANAGE_GOAL_SHOW';
export const MANAGE_GOAL_CANCEL = 'MANAGE_GOAL_CANCEL';
export const MANAGE_GOAL_ENABLE_SUBMIT = 'MANAGE_GOAL_ENABLE_SUBMIT';
export const MANAGE_GOAL_DISABLE_SUBMIT = 'MANAGE_GOAL_DISABLE_SUBMIT';

