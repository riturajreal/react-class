
import { useState } from "react";
import { InputBox  } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  // gives data
  const currencyInfo = useCurrencyInfo(from);
  // gives key of data which is retunrned by api
  const options= Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to]);

}

  return (
    <>
        <div
            className="w-full p-5 h-screen flex flex-wrap justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-global-currency_115579-1115.jpg')`,
            }}
        >
            <div className="w-full mt-20">
            <h1 className="text-center font-semibold text-white mb-5 text-4xl">Currency Converter</h1>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-3xl p-5 backdrop-blur-md bg-white bg-opacity-20">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onAmountChange={(amount)=> setAmount(amount)}
                                onCurrencyChange={(currency)=> {setAmount(amount)}}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-900 duration-700 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable  
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-900 duration-700 text-white px-4 py-3 rounded-lg " onClick={convert}>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                            
                        </button>
                    </form>
                </div>
            </div>
        </div>
  
    </>
  )
}

export default App
