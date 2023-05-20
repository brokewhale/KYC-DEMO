import { createContext, ReactNode, useContext, useReducer } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type STEPS = 1 | 2 | 3 | 4;

let contextData = {
  step: 15,
};

type AuthActions =
  | { type: 'SIGN_IN'; payload: { user: User } }
  | { type: 'SAVE_CONTINUE'; payload: { user: User } }
  | { type: 'SIGN_OUT' };

type AuthState =
  | {
      state: 'SIGNED_IN';
      currentUser: User;
    }
  | {
      state: 'SIGNED_OUT';
    }
  | {
      state: 'SAVE_CONTINUE';
    }
  | {
      state: 'UNKNOWN';
    };

const AuthReducer = (state: any, action: AuthActions): any => {
  switch (action.type) {
    case 'SIGN_IN':
      contextData = {
        step: 5,
      };
      return {
        state: 'SIGNED_IN',
        currentUser: action.payload.user,
        contextData: 22,
      };
      break;
    case 'SIGN_OUT':
      return {
        state: 'SIGNED_OUT',
      };
      break;
    case 'SAVE_CONTINUE':
      return {
        state: 'SAVE_CONTINUE',
      };
      break;
    default:
      // contextData = {
      //   step: 2,
      // };
      return {
        state: 'UNKNOWN',
        contextData: 5,
      };
  }
};

type AuthContextProps = {
  contextData: any;
  dispatch: (value: AuthActions) => void;
};

export const AuthContext = createContext<AuthContextProps>({
  contextData: { step: 1 },
  dispatch: (val) => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, contextData);
  console.log('s', state);

  return (
    <AuthContext.Provider value={{ contextData: state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthState = () => {
  const { contextData } = useContext(AuthContext);
  return {
    contextData,
  };
};

const useSignIn = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signIn: (user: User) => {
      dispatch({ type: 'SIGN_IN', payload: { user } });
    },
  };
};

const useSignOut = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  };
};

export { useAuthState, useSignIn, useSignOut, AuthProvider };
