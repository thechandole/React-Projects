import React, { useState } from 'react'
import InputBox from './components/InputBox'
import UseCurrencyInfo from './hooks/useCurrencyInfo'

{/** custom hook imported  */}

function App() {
  const [amount,setAmount]=useState(0)
  const [fromCurrency,setFromCurrency]=useState("usd")
  const [toCurrency,setToCurrency]=useState("inr")
  let [convertedAmount,setConvertedAmount]=useState(0)

  const currencyData=UseCurrencyInfo(fromCurrency);

  {/** button var convert hoil tya sathi ek function lihun tyat pass kelay  */}
  function convert(){
    setConvertedAmount(amount * currencyData[toCurrency]);
  }

  {/** all currency options jo object me nikale ke keys lake degi  */}
  const options=Object.keys(currencyData);
  
  

  function swapCurrencies(){
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);

        
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFromCurrency(currency)}
                                onAmountChange={(amount)=> setAmount(amount)}
                                selectCurrency={fromCurrency}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                onClick={swapCurrencies}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                
                                onCurrencyChange={(currency)=>setToCurrency(currency)}
                                selectCurrency={toCurrency}
                               
                                amountDisabled
                                
                            />
                        </div>
                        <button 
                        type="submit" className="cursor-pointer w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase() }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
