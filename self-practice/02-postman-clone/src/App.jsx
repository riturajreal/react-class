import { useState } from "react";
import "./App.css";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState('');
  const [timeTaken, setTimeTaken] = useState(0);

  const sendRequest = async () => {
    const startTime = new Date().getTime();

    try {
      const fetchOptions = { method };
      const fetchResponse = await fetch(url, fetchOptions);
      const responseData = await fetchResponse.json();

      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;

      setResponse(JSON.stringify(responseData, null, 2));
      setStatus(`Status: ${fetchResponse.status} ${fetchResponse.statusText}`);
      setTimeTaken(`Time Taken: ${elapsedTime} ms`);

    } catch (error) {
      setResponse(`Error: ${error.message}`);
      setStatus('Status: Error');
      setTimeTaken('Time Taken: N/A');
    }
  };

  return (

    <>

    <h1 className="font-bold text-3xl"><span className="text-orange-500">Postman </span>Clone</h1>

    <div className="container flex flex-col justify-normal items-center mx-auto mt-8 p-8 bg-gray-50 overflow-hidden rounded-2xl max-w-[1200px]">
      <div className="flex justify-normal items-center ">
        
          {/* option */}
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border rounded-tl-xl rounded-bl-xl rounded- bg-gray-300 p-2" >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            {/* Add other HTTP methods as needed */}
          </select>

        
          {/* url input */}
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-gray-200 p-2" />


        {/* send req btn */}
        <button onClick={sendRequest} className="bg-orange-500 rounded-tr-xl rounded-br-xl  text-white p-2">
          Send Request
        </button>


      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Response:</h2>
        <pre id="response" className="border max-w-[600px] overflow-scroll no-scrollbar  text-left  p-4 bg-white rounded-xl">
          {response}
        </pre>
      </div>

      <div className="mt-4">
        <p>{status}</p>
        <p>{timeTaken}</p>
      </div>
    </div>

    </>
  );
}

export default App;
