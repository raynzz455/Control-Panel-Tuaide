<script lang="ts">

</script>

<style>
  </style>

  
<body class="bg-white">
    <div class="max-h-screen w-screen sm:max-w-[1000px] mx-auto">

        <p class="text-left ml-5 sm:ml-6 text-sm md:text-lg font-medium uppercase my-4">Portofolio</p>
        <div class="max-h-[90vh] w-full">
            <!--header-->
            <div class="bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3 sm:rounded-tl-2xl sm:rounded-tr-2xl flex flex-row justify-between">
                <p class="px-4 sm:px-5 flex text-left py-3">
                  Images
                </p>
                <div class="flex flex-row gap-2">
                 <!-- Checkbox Select -->
                <div class="flex items-center pb-2">
                  <input type="checkbox" class="mr-2" id="checkbox-select">
                  <label for="checkbox-select">SELECT</label>
                </div>
                  <button class="flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-[#f28928] hover:bg-[#c97b31] text-white"> 
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                  </button>
                  <button class="hidden sm:block sm:flex items-center justify-center pr-2 pl-4  bg-[#f28928] hover:bg-[#c97b31] text-white rounded-3xl">
                      <span class="">Tambah Gambar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>  
              <!--images-->
              <div class="w-full h-auto p-2 flex flex-col gap-4 sm:py-4 sm:grid sm:grid-cols-3">                
                <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
                  <div class="w-full h-full overflow-hidden group relative">
                    <img src="/images/logo.png" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
                    <!-- Checkbox Img -->
                        <div class="checkbox-img absolute bottom-4 left-4 items-center justify-center z-50">
                          <input type="checkbox" class="w-5 h-5 rounded-full bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rin g-indigo-500">
                          <label for="checkbox-img"></label>
                        </div>
               <!-- Button Img -->
                      <div class="absolute bottom-1 right-1 w-1/4 h-full z-70 flex flex-col items-center justify-center gap-4 bg-gray-500 bg-opacity-40">
                        <button class="bg-blue-500 text-white px-1 py-1 rounded-md hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </button>
                        <button class="bg-red-500 text-white px-1 py-1 rounded-md hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                        <button class="bg-orange-500 text-white px-1 py-1 rounded-md hover:bg-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                        </button>
                    </div>
                  </div>
                </div>
                
                <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
                  <div class="w-full h-full overflow-hidden group relative">
                    <img src="/images/logo.png" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
                    <!-- Checkbox Img -->
                        <div class="checkbox-img absolute bottom-4 left-4 items-center justify-center z-50">
                          <input type="checkbox" class="w-5 h-5 rounded-full bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rin g-indigo-500">
                          <label for="checkbox-img"></label>
                        </div>
               <!-- Button Img -->
                      <div class="absolute bottom-1 right-1 w-1/4 h-full z-70 flex flex-col items-center justify-center gap-4 bg-gray-500 bg-opacity-40">
                        <button class="bg-blue-500 text-white px-1 py-1 rounded-md hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </button>
                        <button class="bg-red-500 text-white px-1 py-1 rounded-md hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                        <button class="bg-orange-500 text-white px-1 py-1 rounded-md hover:bg-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                        </button>
                    </div>
                  </div>
                </div>

                <div class="border w-full sm:w-[300px] h-[200px] mx-auto">
                  <div class="w-full h-full overflow-hidden group relative">
                    <img src="/images/logo.png" alt="gambar" class="gambarlah w-full h-full object-cover object-center transition-transform duration-[350ms] group-hover:scale-110">
                    <!-- Checkbox Img -->
                        <div class="checkbox-img absolute bottom-4 left-4 items-center justify-center z-50">
                          <input type="checkbox" class="w-5 h-5 rounded-full bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rin g-indigo-500">
                          <label for="checkbox-img"></label>
                        </div>
               <!-- Button Img -->
                      <div class="absolute bottom-1 right-1 w-1/4 h-full z-70 flex flex-col items-center justify-center gap-4 bg-gray-500 bg-opacity-40 ">
                        <button class="bg-blue-500 text-white px-1 py-1 rounded-md hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </button>
                        <button class="bg-red-500 text-white px-1 py-1 rounded-md hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                        <button class="bg-orange-500 text-white px-1 py-1 rounded-md hover:bg-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                        </button>
                    </div>
                  </div>
                </div>

              </div>





              
        </div>


      </div>
</body>