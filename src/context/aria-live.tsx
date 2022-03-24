import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Setter = Dispatch<SetStateAction<string>>;

interface initialStateType {
  message: string;
  setMessage: Setter;
}

const initialState: initialStateType = {
  message: "Player X, it is your turn.",
  setMessage: () => "",
};

function createAriaLiveContext() {
  const Context = createContext(initialState);

  function Provider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState("");

    return (
      <Context.Provider value={{ message, setMessage }}>
        <p aria-live="polite" aria-atomic="true" className="visually-hidden">
          {message}
        </p>
        {children}
      </Context.Provider>
    );
  }

  function useStateContext() {
    const ctx = useContext(Context);

    if (ctx === undefined) {
      throw new Error("useStateContext hook must be used within a Provider");
    }

    return ctx;
  }

  return [useStateContext, Provider] as const;
}

export const [useAriaLive, AriaLiveProvider] = createAriaLiveContext();
