import * as Action from './constans';
import Jwt from './../../common/token/jwt';

const init = {
  authentication: Jwt.isToquenValid(),
  rol: Jwt.isToquenValid() ? Jwt.decode().rol() : ['invitado']
};

const reducerAuth = (state = init, action) => {
  switch(Action){
    case Action.LOGIN_ACTION:
      return {
        ...state,
        loading: true
      };

    case Action.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        authentication: true,
        loading: false
      };
    default:
      return state;
  }
}