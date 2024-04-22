import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center bg-orange-50">
      <div className="max-w-md p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="6" className="w-full border border-gray-300 rounded-lg px-3 py-2" required></textarea>
          </div>
          <button type="submit" className="block w-full mt-6 px-14 py-3 bg-black text-white border-2 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;