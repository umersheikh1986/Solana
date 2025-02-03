"use client";
import React from "react";
// import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import Image from "next/image";
// export const metadata: Metadata = {
//   title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const TablesPage = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <DefaultLayout>
      <div className="flex justify-center">
        <div className="w-2/5">
          <h1 className="ml-5 text-3xl font-bold text-white">
            {" "}
            Solana Token Creator
          </h1>{" "}
          <h1 className="ml-5 text-lg font-bold text-white">
            {" "}
            The perfect tool to create Solana SPL tokens. Simple, user friendly,
            and fast.
          </h1>
          <form className="mt-4 w-full max-w-md rounded-3xl border-2 border-[#B426D2] bg-[#1B235D] p-8 shadow-md">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Initialize Liquidity
            </h2>

            {/* Email Field */}
            <div className="flex gap-2">
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Symbol
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Decimals
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Supply
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Image
                </label>

                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-11 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedImage && (
                  <Image
                    width={200}
                    height={200}
                    src={selectedImage}
                    alt="Selected"
                    className="h-auto max-w-full rounded-md"
                  />
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Description
              </label>
              <textarea
                id="message"
                className="w-full rounded-md border border-gray-300 bg-[#0C0927] px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex text-white">
              <div className="w-2/4">
                <h1 className="text-lg font-bold">
                  Revoke Freeze <span className="text-sm">(required)</span>
                </h1>{" "}
                <h1 className="mt-2">
                  Revoke Freeze allows you to create a liquidity pool
                </h1>
                <input
                  type="checkbox"
                  className="toggle toggle-info mt-2"
                  defaultChecked
                />
              </div>
              <div className="w-2/4">
                <h1 className="ml-2 text-lg font-bold">Revoke Mint</h1>{" "}
                <h1 className="ml-2 mt-2">
                  Mint Authority allows you to increase tokens supply
                </h1>
                <input
                  type="checkbox"
                  className="toggle toggle-info ml-2 mt-2"
                  defaultChecked
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
            >
              Select Wallet
            </button>
          </form>
          <form className="mt-4 w-full max-w-md rounded-3xl border-2 border-[#B426D2] bg-[#1B235D] p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Revoke Mint Authority
            </h2>
            <h2 className="text-white">
              Revoking mint authority ensures that there can be no more tokens
              minted than the total supply. This provides security and peace of
              mind to buyers. The cost is 0.1 SOL
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Select Token"
                className="input input-bordered input-primary mt-4 w-full max-w-xs bg-[#0C0927]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
            >
              Select Wallet
            </button>
          </form>
        </div>

        <div className="text-md w-2/5 font-semibold text-white">
          <h1 className="text-3xl font-bold">Create Solana Token</h1>
          <h1 className="pt-2">
            Effortlessly create your Solana SPL Token with our 7+1 step process
            – no coding required.
          </h1>
          <h1 className="pt-2">
            Customize your Solana Token exactly the way you envision it. Less
            than 5 minutes, at an affordable cost.
          </h1>
          <h1 className="pt-8 text-3xl">How to use Solana Token Creator</h1>
          <h1 className="pt-2">1. Connect your Solana wallet.</h1>
          <h1 className="pt-2">2. Specify the desired name for your Token</h1>
          <h1 className="pt-2">3. Indicate the symbol (max 8 characters).</h1>
          <h1 className="pt-2">
            4. Select the decimals quantity (default recommended 6 for all
            tokens)
          </h1>
          <h1 className="pt-2">
            5. Provide a brief description for your SPL Token.
          </h1>
          <h1 className="pt-2">6. Upload the image for your token (PNG).</h1>
          <h1 className="pt-2">7. Determine the Supply of your Token.</h1>
          <h1 className="pt-2">
            8. Click on create, accept the transaction and wait until your
            tokens ready.
          </h1>
          <h1 className="pt-2">
            The cost of Token creation is 0.3 SOL, covering all fees for SPL
            Token Creation.
          </h1>
          <h1 className="pt-6 text-3xl">Revoke Freeze Authority:</h1>
          <h1 className="pt-2">
            If you want to create a liquidity pool you will need to Revoke
            Freeze Authority of the Token, you can do that here. The cost is 0.1
            SOL.
          </h1>
          <h1 className="pt-6 text-3xl">Revoke Mint Authority:</h1>
          <h1 className="pt-2">
            Revoking mint authority ensures that there can be no more tokens
            minted than the total supply. This provides security and peace of
            mind to buyers. The cost is 0.1 SOL
          </h1>
          <h1 className="pt-8">
            Once the creation process starts, it will only take a few seconds!
            Once complete, you will receive the total supply of the token in
            your wallet.
          </h1>
          <h1 className="pt-2">
            With our user-friendly platform, managing your tokens is simple and
            affordable.
          </h1>
          <h1 className="pt-2">
            You can choose to revoke mint authority later if you choose
          </h1>
        </div>
      </div>

      <h1 className="mt-20 pl-32 text-4xl font-bold text-white">
        Frequently Asked Questions
      </h1>
      <div className="join join-vertical relative left-1/2 mt-10 w-4/5 -translate-x-1/2 text-white">
        <div className="collapse join-item collapse-arrow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is the Solana Token Creator?
          </div>
          <div className="collapse-content">
            <p>
              The Orion Tools Solana Token Creator is an advanced Smart Contract
              empowering users to effortlessly generate customized SPL Tokens
              (Solana tokens), specifically tailored to their preferences in
              terms of supply, name, symbol, description, and image on the
              Solana Chain. Making tokens is super quick and cheap with our easy
              process.The Orion Tools Solana Token Creator is an advanced Smart
              Contract empowering users to effortlessly generate customized SPL
              Tokens (Solana tokens), specifically tailored to their preferences
              in terms of supply, name, symbol, description, and image on the
              Solana Chain. Making tokens is super quick and cheap with our easy
              process.
            </p>
          </div>
        </div>
        <div className="collapse join-item collapse-arrow border border-base-300 border-x-[#0C0927]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is it Safe to Create Solana Tokens here?
          </div>
          <div className="collapse-content">
            <p>
              Yes, our tools is completely safe. It is a dApp that creates your
              token, giving you and only you the mint and freeze Authority (the
              control of a SPL Token). Our dApp is audited and used by hundred
              of users every month.
            </p>
          </div>
        </div>
        <div className="collapse join-item collapse-arrow border border-base-300 border-x-[#0C0927]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How much time will the Solana Token Creator Take?
          </div>
          <div className="collapse-content">
            <p>
              The time of your Token Creation depends on the TPS Status of
              Solana. It usually takes just a few seconds so do not worry. If
              you have any issue please contact us
            </p>
          </div>
        </div>
        <div className="collapse join-item collapse-arrow border border-base-300 border-x-[#0C0927]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How much does it Cost?
          </div>
          <div className="collapse-content">
            <p>
              The token creation currently cost 0.3 Sol, it includes all fees
              necessaries for the Token Creation in Solana mainnet.
            </p>
          </div>
        </div>
        <div className="collapse join-item collapse-arrow border border-base-300 border-x-[#0C0927]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Which Wallet can I use?
          </div>
          <div className="collapse-content">
            <p>
              You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.
            </p>
          </div>
        </div>
        <div className="collapse join-item collapse-arrow border border-base-300 border-x-[#0C0927]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How many tokens can I create for each decimal amount?
          </div>
          <div className="collapse-content">
            <p>
              Here is the max amount of tokens you can create for each decimal
              range. <p>0 to 4 - 1,844,674,407,370,955</p>
              <p>5 to 7 - 1,844,674,407,370</p> 8 - 184,467,440,737{" "}
              <p>9 - 18,446,744,073</p>
            </p>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 mt-20 w-4/5 -translate-x-1/2 text-lg font-medium text-white">
        <h1 className="text-4xl font-bold">Solana SPL Token Creator</h1>
        <h1 className="mt-6">
          If you are seeking a convenient and effective method for generating
          SPL tokens on the Solana blockchain, our online SPL token creator
          offers an ideal solution. Our platform is user-friendly and intuitive,
          enabling users to tailor and launch their tokens within minutes.
        </h1>
        <h1 className="mt-6">
          Our SPL token creator eliminates the need for expertise in blockchain
          technology; anyone can effortlessly create and manage their tokens.
          Additionally, we prioritize high security and privacy for our users.
          All transactions and token information benefit from protection through
          our on-chain smart contract, ensuring the security of your assets
          throughout and after the process.
        </h1>
        <h1 className="mt-6">
          Our goal is to provide users with a seamless and efficient experience
          in crafting SPL tokens on the Solana blockchain. Through our online
          creator, you can personalize your tokens with unique logos,
          descriptions, and issuance details, making them distinct and
          reflective of your brand or project.
        </h1>
      </div>

      <div className="relative left-1/2 mt-20 w-4/5 -translate-x-1/2 text-lg font-medium text-white">
        <h1 className="text-4xl font-bold">
          Why Create Solana Tokens using Orion
        </h1>
        <h1 className="mt-6">
          Whether you are a seasoned developer or just starting out, our SPL
          Token Creator software is tailor-made for you. Experience the ease of
          quickly and securely generating tokens, saving valuable time and
          resources. What sets us apart is our unwavering commitment to
          exceptional support.
        </h1>
        <h1 className="mt-6">
          Our dedicated team of experts is available 24/7 to address any
          inquiries or challenges you may encounter. Start your journey of
          creating and managing SPL tokens on Solana today with confidence,
          knowing that our reliable and secure online creator offers an
          unparalleled experience. You would not find a more user-friendly and
          efficient solution elsewhere!
        </h1>
      </div>

      <hr className="mt-20" />
      <h1 className="mt-6 text-center text-lg">
        Need support? Contact us: support@oriontools.io
      </h1>
    </DefaultLayout>
  );
};

export default TablesPage;
