<div class="flex items-center justify-center min-h-screen bg-white">
  <div class="px-8 py-6 mx-4 md:mx-auto max-w-md bg-white rounded-lg shadow-md">
    <img src="/images/logo-icon.png" alt="icon foto" class="w-[100px] md:max-w-[200px] mx-auto">
    <form method="POST" action="?/login">
      <div class="mt-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="mt-4 mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input id="password" name="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-[#f58927] hover:bg-[#f87c42] text-white font-bold py-2 px-4 rounded hover:rounded-3xl hover:px-6 hover:ml-2 hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          Login 
        </button>
        <button formaction="?/signup" class="text-sm text-blue-500 hover:underline">Sign up</button>
      </div>
    </form>
  </div>
</div>
