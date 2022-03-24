import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export default function createLocalStorageContext<StateType>(
  initialState: StateType
) {
  type UpdateType = Dispatch<SetStateAction<typeof initialState>>;
  const defaultUpdate: UpdateType = () => initialState;

  const Context = createContext({ state: initialState, update: defaultUpdate });

  function Provider({ children }: { children: ReactNode }) {
    const [state, update] = useState(() => {
      const previous = JSON.parse(localStorage.getItem("history") || "false");
      console.log({ previous });

      return previous || initialState;
    });

    useEffect(() => {
      localStorage.setItem("history", JSON.stringify(state));
    }, [state]);

    return (
      <Context.Provider value={{ state, update }}>{children}</Context.Provider>
    );
  }

  function useLocalStorageContext() {
    const ctx = useContext(Context);

    if (ctx === undefined) {
      throw new Error("useLocalStorage hook must be used within a Provider");
    }

    return ctx;
  }

  return [useLocalStorageContext, Provider] as const;
}
