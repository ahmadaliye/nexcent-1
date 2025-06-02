

<template>
 

    <!-- Responsive Heade r -->
    <div 
      v-if="showMenu" 
      class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-all duration-300"
    >
      <button class="absolute top-6 right-8 text-4xl text-[#4CAF4F] cursor-pointer hover:text-[#388E3C] transition-colors duration-200" @click="showMenu = false">
        &times;
      </button>
      <nav class="flex flex-col gap-8 items-center">
        <ul class="flex flex-col gap-6 text-2xl font-semibold items-center">
          <li>
            <a href="#" class="hover:text-[#4CAF4F] transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#4CAF4F] transition-colors duration-200">Features</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#4CAF4F] transition-colors duration-200">Community</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#4CAF4F] transition-colors duration-200">Blog</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#4CAF4F] transition-colors duration-200">Pricing</a>
          </li>
        </ul>
        <button class="w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold hover:bg-[#388E3C] transition-colors duration-200">
          Register Now
        </button>
      </nav>
    </div>  <header class="flex flex-col md:flex-row w-full justify-between items-center bg-white h-auto md:h-[80px] shadow-md px-6 md:px-16 py-4 md:py-0">
      <div class="flex justify-between items-center w-full md:w-auto">
        <img src="./assets/logo.png" class="w-[120px] md:w-[150px]" alt="">
        <button class="md:hidden text-2xl" @click="showMenu = !showMenu">
          <span v-if="!showMenu">&#9776;</span>
          <span v-else>&times;</span>
        </button>
      </div>
      <nav :class="['flex-col md:flex-row flex w-full md:w-auto gap-6 md:gap-20 items-center transition-all duration-300', showMenu ? 'flex' : 'hidden md:flex']">
        <ul class="flex flex-col md:flex-row gap-4 md:gap-10 text-[16px] items-center">
          <li><a href="#" class="hover:text-[#4CAF4F] transition">Home</a></li>
          <li><a href="#" class="hover:text-[#4CAF4F] transition">Features</a></li>
          <li><a href="#" class="hover:text-[#4CAF4F] transition">Community</a></li>
          <li><a href="#" class="hover:text-[#4CAF4F] transition">Blog</a></li>
          <li><a href="#" class="hover:text-[#4CAF4F] transition">Pricing</a></li>
        </ul>
        <button class="w-full md:w-37 h-11 bg-[#4CAF4F] rounded-[5px] text-white mt-2 md:mt-0">Register Now</button>
      </nav>
    </header>

    <main class="w-full">

      <!-- Hero Section -->
      <section>
        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-40 py-10 md:py-16 bg-[#F5F7FA] gap-8">
          <div class="flex-1 flex flex-col gap-6 max-w-xl">
            <h1 class="text-3xl md:text-5xl font-bold text-[#263238] leading-tight">
              Lessons and insights <span class="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <i class="fa-solid fa-arrow-right text-xl md:text-2xl" style="color: #000000;"></i>
            <p class="text-base md:text-lg text-[#717171]">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button class="w-full md:w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold mt-2 cursor-pointer 
  hover:bg-[#388E3C] 
  active:bg-[#2E7D32]
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#388E3C]
  focus:ring-opacity-50
  transition-colors 
  duration-200 ">
              Register
            </button>  </div>
          <div class="flex-1 flex justify-center md:justify-end">
            <img src="./assets/image1.png" alt="Landing" class="max-w-xs md:max-w-md w-full h-auto" />
          </div>
        </div>
      </section>

      <!-- Our Clients -->
      <section>
        <div class="flex flex-col items-center py-8 md:py-12 px-4">
          <h1 class="text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-2 md:mb-4">Our Clients</h1>
          <p class="text-base md:text-lg text-[#717171] max-w-2xl text-center">
            We have been working with some Fortune 500+ clients
          </p>
          <div class=" gap-30 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <img src="./assets/image2.png" class="w-16 md:w-24" alt="">
            <img src="./assets/image3.png" class="w-16 md:w-24" alt="">
            <img src="./assets/image4.png" class="w-16 md:w-24" alt="">
            <img src="./assets/image5.png" class="w-16 md:w-24" alt="">
            <img src="./assets/image6.png" class="w-16 md:w-24" alt="">
            <img src="./assets/image7.png" class="w-16 md:w-24" alt="">
          </div>
        </div>
      </section>

      <!-- Manage Community -->
      <section>
        <div class="flex flex-col items-center py-8 md:py-12 bg-white px-4">
          <h1 class="text-xl md:text-3xl font-bold text-[#4D4D4D] mb-2 md:mb-4 w-full md:w-120 text-center">Manage your entire community in a single system</h1>
          <p class="text-base md:text-lg text-[#717171] max-w-2xl text-center mb-6 md:mb-10">
            Who is Nextcent suitable for?
          </p>
          <div class="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12">
            <div class="flex flex-col items-center bg-[#F5F7FA] rounded-lg p-6 md:p-8 w-full md:w-72 shadow">
              <img src="./assets/image9.png" alt="Membership" class="mb-4 w-12 md:w-16 h-12 md:h-16" />
              <h2 class="text-lg md:text-xl font-semibold text-[#4D4D4D] mb-2 text-center">Membership Organisations</h2>
              <p class="text-center text-[#717171] text-sm md:text-base">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            <div class="flex flex-col items-center bg-[#F5F7FA] rounded-lg p-6 md:p-8 w-full md:w-72 shadow">
              <img src="./assets/image10.png" alt="Associations" class="mb-4 w-12 md:w-16 h-12 md:h-16" />
              <h2 class="text-lg md:text-xl font-semibold text-[#4D4D4D] mb-2">National Associations</h2>
              <p class="text-center text-[#717171] text-sm md:text-base">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            <div class="flex flex-col items-center bg-[#F5F7FA] rounded-lg p-6 md:p-8 w-full md:w-72 shadow">
              <img src="./assets/image11.png" alt="Clubs" class="mb-4 w-12 md:w-16 h-12 md:h-16" />
              <h2 class="text-lg md:text-xl font-semibold text-[#4D4D4D] mb-2">Clubs And Groups</h2>
              <p class="text-center text-[#717171] text-sm md:text-base">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pixelgrade Section -->
      <section>
        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-40 py-10 md:py-16 bg-white gap-8">
          <div class="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
            <img src="./assets/image12.png" alt="Pixelgrade" class="max-w-xs md:max-w-md w-full h-auto" />
          </div>
          <div class="flex-1 flex flex-col gap-4 md:gap-6 max-w-xl">
            <h2 class="text-xl md:text-3xl font-bold text-[#4D4D4D] mb-2 md:mb-4">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p class="text-base md:text-lg text-[#717171] mb-4 md:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ultrices nulla at erat pellentesque, nec convallis erat elementum.
            </p>
            <button class="w-full md:w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold mt-2 cursor-pointer 
  hover:bg-[#388E3C] 
  active:bg-[#2E7D32]
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#388E3C]
  focus:ring-opacity-50
  transition-colors 
  duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <!-- Helping Local Business -->
      <section>
        <div class="flex flex-col md:flex-row justify-center gap-10 md:gap-28 bg-[#F5F7FA] py-10 md:py-16 px-4">
          <div class="mb-8 md:mb-0">
            <h2 class="text-2xl md:text-[35px] font-semibold mt-2 md:mt-6">Helping a local <br> <span class="text-[#4CAF4F]">business reinvent itself</span></h2>
            <p class="mt-2 text-base md:text-lg">We reached here with our hard work and dedication</p>
          </div>
          <div class="grid grid-cols-2 gap-6 md:gap-10">
            <div class="flex gap-3 items-center">
              <img src="./assets/image13.png" class="w-8 md:w-11 h-8 md:h-11" alt="">
              <div>
                <h2 class="text-[#4D4D4D] text-xl md:text-4xl font-semibold">2,245,341</h2>
                <p class="text-[#717171] text-sm md:text-base">Members</p>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <img src="./assets/image14.png" class="w-8 md:w-11 h-8 md:h-11" alt="">
              <div>
                <h2 class="text-[#4D4D4D] text-xl md:text-4xl font-semibold">46,328</h2>
                <p class="text-[#717171] text-sm md:text-base">Clubs</p>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <img src="./assets/image15.png" class="w-8 md:w-11 h-8 md:h-11" alt="">
              <div>
                <h2 class="text-[#4D4D4D] text-xl md:text-4xl font-semibold">828,867</h2>
                <p class="text-[#717171] text-sm md:text-base">Event Bookings</p>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <img src="./assets/image16.png" class="w-8 md:w-11 h-8 md:h-11" alt="">
              <div>
                <h2 class="text-[#4D4D4D] text-xl md:text-4xl font-semibold">1,926,436</h2>
                <p class="text-[#717171] text-sm md:text-base">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Design Footer Section -->
      <section>
        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-40 py-10 md:py-16 bg-white gap-8">
          <div class="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
            <img src="./assets/image17.png" alt="Pixelgrade" class="max-w-xs md:max-w-md w-full h-auto" />
          </div>
          <div class="flex-1 flex flex-col gap-4 md:gap-6 max-w-xl">
            <h2 class="text-xl md:text-3xl font-bold text-[#4D4D4D] mb-2 md:mb-4">
              How to design your site footer like <br> we did
            </h2>
            <p class="text-base md:text-lg text-[#717171] mb-4 md:mb-6">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button class="w-full md:w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold mt-2 cursor-pointer 
  hover:bg-[#388E3C] 
  active:bg-[#2E7D32]
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#388E3C]
  focus:ring-opacity-50
  transition-colors 
  duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <!-- Testimonial Section -->
      <section>
        <div class="flex flex-col md:flex-row justify-center bg-[#F5F7FA] px-4 md:px-32 py-10 md:py-12 gap-8 md:gap-13">
          <div class="flex justify-center md:justify-start mb-6 md:mb-0">
            <img src="./assets/image18.png" class="w-40 md:w-90" alt="">
          </div>
          <div>
            <div>
              <p class="text-[#717171] w-full md:w-180 text-sm md:text-base">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h3 class="text-base md:text-[20px] text-[#4CAF4F] font-medium py-2 md:py-3">Tim Smith</h3>
              <p class="text-[#89939E] text-sm md:text-base">British Dragon Boat Racing Association</p>
            </div>
            <div class="flex flex-wrap gap-4 md:gap-10 py-6 md:py-9 items-center">
              <img src="./assets/image19.png" alt="">
              <img src="./assets/image20.png" alt="">
              <img src="./assets/image21.png" alt="">
              <img src="./assets/image22.png" alt="">
              <img src="./assets/image23.png" alt="">
              <img src="./assets/image24.png" alt="">

              <h2 class="text-lg md:text-[26px] font-semibold text-[#4CAF4F] ml-2">Meet all customers</h2>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section>
        <div class="flex flex-col items-center px-4 md:px-32 py-8 md:py-12 gap-6 md:gap-10">
          <h2 class="text-2xl md:text-[35px] text-[#4D4D4D] font-semibold">Caring is the new marketing</h2>
          <p class="text-[#717171] max-w-3xl text-center text-sm md:text-base">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lots more.
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-10 md:mb-30 px-4">
          <div class="relative h-full mb-6 md:mb-0">
            <img src="./assets/image25.png" class="w-full md:w-80 rounded-lg" alt="">
            <div class="w-full md:w-70 bg-[#F5F7FA] p-4 rounded-lg absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow">
              <h3 class="text-base md:text-[19px] text-center text-[#717171] font-semibold">Creating Streamlined Safeguarding Processes with OneRen</h3>
              <h4 class="font-semibold text-[#4CAF4F] flex py-2 md:py-4 justify-center">Readmore</h4>
            </div>
          </div>
          <div class="relative h-full mb-6 md:mb-0">
            <img src="./assets/image26.png" class="w-full md:w-80 rounded-lg" alt="">
            <div class="w-full md:w-70 bg-[#F5F7FA] p-4 rounded-lg absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow">
              <h3 class="text-base md:text-[19px] text-center text-[#717171] font-semibold">What are your safeguarding responsibilities and how can you manage them?</h3>
              <h4 class="font-semibold text-[#4CAF4F] flex py-2 md:py-4 justify-center">Readmore</h4>
            </div>
          </div>
          <div class="relative h-full">
            <img src="./assets/image27.png" class="w-full md:w-80 rounded-lg" alt="">
            <div class="w-full md:w-70 bg-[#F5F7FA] p-4 rounded-lg absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow">
              <h3 class="text-base md:text-[19px] text-center text-[#717171] font-semibold">Revamping the Membership Model with Triathlon Australia</h3>
              <h4 class="font-semibold text-[#4CAF4F] flex py-2 md:py-4 justify-center">Readmore</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section>
        <div class="bg-[#F5F7FA] w-full flex flex-col items-center py-8 md:py-16 px-4">
          <h2 class="text-2xl md:text-[60px] font-semibold w-full md:w-150 text-center mx-auto pt-4 md:pt-8">Pellentesque suscipit fringilla libero eu.</h2>
          <button class="w-full md:w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold mt-2 cursor-pointer 
  hover:bg-[#388E3C] 
  active:bg-[#2E7D32]
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#388E3C]
  focus:ring-opacity-50
  transition-colors 
  duration-200">Get a Demo</button>
        </div>
      </section>

    </main>

    <!-- Responsive Footer -->
    <footer>
      <div class="bg-[#263238] text-white py-8 md:py-12 px-4 md:px-32 flex flex-col md:flex-row justify-between gap-8 md:gap-10">
        <div class="flex flex-col gap-4 md:gap-6 max-w-xs">
          <img src="./assets/image28.png" class="w-[120px] md:w-[150px] mb-2 md:mb-4" alt="Logo" />
          <p class="text-[#F5F7FA] text-xs md:text-sm">
            Copyright © 2024 Nexcent. <br />
            All rights reserved
          </p>
          <div class="flex gap-3 md:gap-4 mt-2">
            <a href="#"><img src="./assets/image29.png" alt="Instagram" class="w-6 md:w-7 h-6 md:h-7" /></a>
            <a href="#"><img src="./assets/image30.png" alt="Twitter" class="w-6 md:w-7 h-6 md:h-7" /></a>
            <a href="#"><img src="./assets/image31.png" alt="Youtube" class="w-6 md:w-7 h-6 md:h-7" /></a>
          </div>
        </div>
        <div class="flex flex-col md:flex-row flex-1 justify-between gap-8 md:gap-10 md:ml-40">
          <div>
            <h3 class="font-semibold mb-2 md:mb-4">Company</h3>
            <ul class="flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <li><a href="#" class="hover:text-[#4CAF4F]">About us</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Blog</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Contact us</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Pricing</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2 md:mb-4">Support</h3>
            <ul class="flex flex-col gap-1 md:gap-2 text-xs md:text-sm">
              <li><a href="#" class="hover:text-[#4CAF4F]">Help center</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Terms of service</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Legal</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Privacy policy</a></li>
              <li><a href="#" class="hover:text-[#4CAF4F]">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2 md:mb-4">Stay up to date</h3>
            <form class="flex flex-col gap-1 md:gap-2">
              <input
                type="email"
                placeholder="Your email address"
                class="rounded px-3 py-2 text-white text-xs md:text-sm bg-[rgba(81,91,96,255)]"
              />
              <button
                type="submit"
                class="w-full md:w-44 h-12 bg-[#4CAF4F] rounded-[5px] text-white text-lg font-semibold mt-2 cursor-pointer 
  hover:bg-[#388E3C] 
  active:bg-[#2E7D32]
  focus:outline-none 
  focus:ring-2 
  focus:ring-[#388E3C]
  focus:ring-opacity-50
  transition-colors 
  duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>


</template>
    <script setup>
    import { ref } from 'vue'
    const showMenu = ref(false)
    </script>
<style scoped>

</style>


