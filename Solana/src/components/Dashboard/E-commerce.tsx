"use client";
import { useState } from "react";

const ECommerce: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e: any) {
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, message: message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We have received your message, thank you for contacting us!</p>;
  }

  return (
    <>
      {/* <div className="mt-4 grid w-[550px] grid-rows-2 gap-4 text-black md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        Token Creater
        <div className="col-span-12 flex w-[275px] items-center justify-center bg-blue-600 py-10 xl:col-span-8">
         
        </div>
        <div className="col-span-12  flex w-[275px] items-center justify-center bg-blue-600 py-10 xl:col-span-8">
        </div>
      </div> */}
      <div className="flex justify-center">
        <div className="w-2/5">
          <h1 className="ml-5 text-2xl font-bold text-white">
            {" "}
            Initialize Liquidity
          </h1>{" "}
          <form
            onSubmit={submit}
            className="mt-4 w-full max-w-md rounded-3xl border-2 border-[#B426D2] bg-[#1B235D] p-8 shadow-md"
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Initialize Liquidity
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
            >
              Initialize liquidity pool
            </button>
          </form>
        </div>
        <div className="text-md w-2/5 font-semibold text-white">
          <h1 className="text-3xl font-bold">How To Create a Liquidity Pool</h1>
          <h1 className="pt-2">Select the token that you just created.</h1>
          <h1 className="pt-2">
            Enter the amount tokens you would like to include in your liquidity
            pool. (Recommended 95% or more)
          </h1>
          <h1 className="pt-2">Select a base token, SOL is recommended.</h1>
          <h1 className="pt-2">
            Enter the amount of SOL you would like to pair with your token.
            (Recommended 10+ SOL)
          </h1>
          <h1 className="pt-2">
            Select your LP fees. This is a small amount of each transaction that
            goes back to growing your tokens liquidity pool. (Recommended 0.25%)
          </h1>
          <h1 className="pt-2">
            Click “Initialize Liquidity Pool” and approve transaction. The cost
            to create a liquidity pool is .5 SOL.
          </h1>
          <h1 className="pt-2">
            In return, you will receive Liquidity pool tokens. To burn liquidity
            so it shows locked, head to Sol-incinerator.com
          </h1>
          <h1 className="pt-2">
            Note: The amount of SOL you enter as your starting LP determines the
            starting price of your token.
          </h1>
        </div>
      </div>
      <hr className="mt-20" />
      <h1 className="mt-6 text-center text-lg">
        Need support? Contact us: support@oriontools.io
      </h1>
    </>
  );
};

export default ECommerce;
