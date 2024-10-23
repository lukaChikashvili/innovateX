import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen p-12 text-white  relative'>
     <div className='bg-gradient-to-tl from-pink-400 to-transparent opacity-50 rounded-full w-96 h-96 absolute -top-20 -left-24 animate-pulse -z-10'></div>
        <div className='bg-gradient-to-br from-gray-400 to-transparent opacity-50 rounded-full w-80 h-80 absolute -bottom-10 -right-6 animate-pulse -z-10'></div>

        <h1 className='text-[4rem] p-12 story mt-[3rem]'>Contact us</h1>

        <div className='w-full flex items-center justify-between mx-auto p-12 gap-12'>
        <p className="text-5xl w-1/2 leading-[4rem]">
            We're here to help! Feel free to reach out to us if you have any
            questions, suggestions, or concerns. We'd love to hear from you.
          </p>


          <div className="lg:w-1/2 w-full">
          <form className="space-y-6 p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-sm mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 outline-none"
                placeholder="Your Message"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-pink-500 hover:bg-pink-600 rounded text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Contact
