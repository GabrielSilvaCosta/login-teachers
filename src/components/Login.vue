<template>
  <div class="flex items-center justify-center min-h-screen bg-yellow-50">
    <Form
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm  sm:p-12  sm:w-96"
      :initial-values="{ email: '', password: '' }"
      :validation-schema="loginSchema"
      @submit="onSubmit"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <Field
          id="email"
          class="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="email"
          type="email"
        />
        <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <Field
          id="password"
          class="input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="password"
          type="password"
        />
        <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
      </div>
      <button
        class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Field, Form, ErrorMessage } from "vee-validate";
import loginSchema from "../schemas/loginSchema";

const router = useRouter();

function onSubmit() {
  router.push({ name: "teachers" });
}
</script>

<style scoped>
.input {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
</style>
