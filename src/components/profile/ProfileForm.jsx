import React from "react";

const ProfileForm = () => {
  return (
    <>
      <form class="w-10/12 lg:w-1/2 mx-auto p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium mb-4">Datos prersonales</p>
        <div class="">
          <label class="block text-sm text-gray-600" for="cus_name">
            Name
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email">
            Email
          </label>
          <input
            class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">
            Address
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" text-sm block text-gray-600" for="cus_email">
            City
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class=" block text-sm text-gray-600" for="cus_email">
            Country
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class=" block text-sm text-gray-600" for="cus_email">
            Zip
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_name">
            Phone
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="cus_name"
            name="cus_name"
            type="number"
            required=""
            placeholder="xxx-xxx-xxx-xxx"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_name">
            Ocupacion
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Maestro"
            aria-label="Name"
          />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
