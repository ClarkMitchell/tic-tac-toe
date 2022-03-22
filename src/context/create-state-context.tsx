import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export default function createStateContext<StateType>(initialState: StateType) {
  type UpdateType = Dispatch<SetStateAction<typeof initialState>>;
  const defaultUpdate: UpdateType = () => initialState;

  const Context = createContext({ state: initialState, update: defaultUpdate });

  function Provider({ children }: { children: ReactNode }) {
    const [state, update] = useState(initialState);

    return (
      <Context.Provider value={{ state, update }}>{children}</Context.Provider>
    );
  }

  function useStateContext() {
    const ctx = useContext(Context);

    if (ctx === undefined) {
      throw new Error("useReducerContext hook must be used within a Provider");
    }

    return ctx;
  }

  return [useStateContext, Provider] as const;
}
