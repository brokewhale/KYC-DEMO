import { createContext, ReactNode, useContext, useReducer } from 'react';

export interface UserDataStepOneType {
  fullName: string;
  nickname?: string;
  email?: string;
  country?: string;
  identifier: string;
}

export interface UserDataStepTwoType {
  address: string;
  city: string;
}

export interface InitialStateType {
  currentStep: STEPS;
  firstStepData: UserDataStepOneType;
  secondStepData: UserDataStepTwoType;
}
export type STEPS = 1 | 2 | 3 | 4;

const initialState: InitialStateType = {
  currentStep: 1,
  firstStepData: {
    fullName: '',
    nickname: '',
    email: '',
    country: '',
    identifier: '',
  },
  secondStepData: {
    address: '',
    city: '',
  },
};

export type AppAction =
  | { type: 'FIRST_STEP'; payload: UserDataStepOneType }
  | { type: 'SECOND_STEP'; payload: UserDataStepTwoType };

const appReducer = (
  state: InitialStateType,
  action: AppAction
): InitialStateType => {
  switch (action.type) {
    case 'FIRST_STEP':
      return {
        ...state,
        currentStep: 2,
        firstStepData: action.payload,
      };
    case 'SECOND_STEP':
      return {
        ...state,
        currentStep: 3,
        secondStepData: action.payload,
      };
    default:
      return state;
  }
};

interface AppStateContextType {
  state: InitialStateType;
  dispatch: React.Dispatch<AppAction>;
}

const AppStateContext = createContext<AppStateContextType>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): InitialStateType =>
  useContext(AppStateContext).state;
export const useAppDispatch = (): React.Dispatch<AppAction> =>
  useContext(AppStateContext).dispatch;

export const useAddFirstStepData = () => {
  const dispatch = useAppDispatch();
  return {
    addFirstStepData: (data: UserDataStepOneType) => {
      dispatch({
        type: 'FIRST_STEP',
        payload: data,
      });
    },
  };
};

export const useAddSecondStepData = () => {
  const dispatch = useAppDispatch();
  return {
    addSecondStepData: (data: UserDataStepTwoType) => {
      dispatch({
        type: 'SECOND_STEP',
        payload: data,
      });
    },
  };
};
