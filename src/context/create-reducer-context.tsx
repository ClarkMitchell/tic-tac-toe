import {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
  ReactNode,
} from "react";

export default function createReducerContext<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState;
  const Context = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });

  function Provider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
      reducer,
      initialState
    );

    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  }

  function useReducerContext() {
    const ctx = useContext(Context);

    if (ctx === undefined) {
      throw new Error("useReducerContext hook must be used within a Provider");
    }

    return ctx;
  }

  return [useReducerContext, Provider] as const;
}
