+++
title = "Contact"
date = 2023-07-01
author = "Patrick Moehrke"
+++

I would love to connect! You can reach out to me through [GitHub](https://github.com/patrickm663) or [LinkedIn](https://linkedin.com/in/patrick-moehrke-05b09ab3). Alternatively, send me a message below:


{{< rawhtml >}}
</br>
<script type="text/javascript" src="https://unpkg.com/tailwindcss-jit-cdn"></script>
<script src="/js/custom.js"></script>
  <body onload="getVisitorCount()">
  <div class="mb-3 pt-0">
    <input type="text" placeholder="Your name" name="name" id="name" class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required />

  </div>

  <div class="mb-3 pt-0">
    <input
      type="email"
      id="email"
      placeholder="Email"
      name="email"
      class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required
    />

  </div>
  <div class="mb-3 pt-0">
    <input
      placeholder="Subject"
      name="subject"
      id="subject"
      class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required
    />
  </div>
  <div class="mb-3 pt-0">
    <textarea
      placeholder="Your message"
      name="message"
      id="message"
      class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required
    ></textarea>
  </div>

  <div class="mb-3 pt-0">

    <button

      class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

onclick="sendMessage(document.getElementById('name').value, document.getElementById('email').value, document.getElementById('subject').value, document.getElementById('message').value)"
      type="submit"
      id="submit"
    >Send a message</button>

  </div>
  <br/>
  <p id="visitors" class="text-center">Visitor Count: </p>
  </body>

{{< /rawhtml >}}
