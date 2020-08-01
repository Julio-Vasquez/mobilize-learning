import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  errorProfile: {
    type: undefined,
    error: undefined
  },
  errorAccount: {
    type: undefined,
    error: undefined
  },
  success: {
    profile: undefined,
    account: undefined
  },
  profileData: undefined,
  accountData: undefined
};

const reducerAccount = handleActions({
  PROFILE: {
    GET_PROFILE: (state, { payload }) => ({
      ...state,
      loading: true,
      errorProfile: {
        ...state.errorProfile,
        type: undefined,
        error: false
      },
      success: {
        ...state.success,
        profile: false
      }
    }),

    GET_PROFILE_SUCCESS: {
      next(state, { payload: { data } }) {
        return {
          loading: false,
          errorProfile: {
            ...state.errorProfile, error: false, type: undefined
          },
          success: {
            ...state.success,
            profile: true
          },
          profileData: data
        };
      }
    },

    GET_PROFILE_FAILED: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      errorProfile: {
        ...state.errorProfile,
        type: error,
        error: true
      },
      success: {
        ...state.success,
        profile: false
      }
    })
  },

  ACCOUNT: {
    GET_ACCOUNT: (state, { payload }) => ({
      ...state,
      loading: true,
      errorAccount: {
        ...state.errorAccount,
        type: undefined,
        error: false
      },
      success: {
        ...state.success,
        account: false
      }
    }),

    GET_ACCOUNT_SUCCESS: {
      next(state, { payload: { data } }) {
        return {
          loading: false,
          errorAccount: {
            ...state.errorAccount, error: false, type: undefined
          },
          success: {
            ...state.success,
            account: true
          },
          accountData: data
        };
      }
    },

    GET_ACCOUNT_FAILED: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      errorAccount: {
        ...state.errorAccount,
        type: error,
        error: true
      },
      success: {
        ...state.success,
        account: false
      }
    })
  }
}, INITIAL_STATE);

export default reducerAccount;