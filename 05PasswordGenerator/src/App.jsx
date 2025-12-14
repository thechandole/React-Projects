import { useEffect, useCallback, useState, useRef} from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = " ";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";

    if (specialCharAllowed) str += "!@#$%^&*()-_=+[]{}|;:,.<>?/~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  useEffect(() => {
    
    passwordGenerator();

  }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

  const copyText = useCallback(() => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
  },[password]);

  const passwordRef = useRef(copyText);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center py-2">
        <h1 className="text-2xl font-bold text-center pb-2">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="w-full px-2 py-1 text-gray-800 bg-white outline-none bg-gray-800"
            placeholder="Your Secure Password"
          />
          <button onClick={copyText} className=" cursor-pointer p-4 bg-blue-500 text-white outline-none font-bold hover:bg-blue-600 shadow-md">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 font-semibold">
            <input
              type="range"
              value={length}
              min="8"
              max="20"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="mr-3">Length: {length}</label>

            <input
              id="numberInput "
              type="checkbox"
              defaultChecked={numberAllowed}
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="mr-3">
              Number
            </label>

            <input
              id="specialCharInput"
              type="checkbox"
              defaultChecked={specialCharAllowed}
              onClick={() => {
                setSpecialCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="specialCharInput" className="mr-3">
              Special Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
