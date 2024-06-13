<template>
  <div
    class="teacher-list p-4 bg-gray-100 sm:p-8 rounded-lg shadow-lg w-full max-w-sm mx-auto mt-10 sm:mt-0"
  >
    <h1
      class="text-2xl font-bold mb-4 text-center text-gray-800 upperacse sm:text-3xl sm:mb-6"
    >
      Lista de Professores
    </h1>
    <ul>
      <li
        v-for="teacher in teachers"
        :key="teacher.id"
        class="mb-2 border rounded shadow sm p-4 bg-white hover:bg-gray-100"
      >
        <div
          class="p-4 border rounded shadow-sm bg-gray-100 sm:p-6 sm:pb-4 sm:mb-4 sm:mb-0 sm:border-0 sm:shadow-none"
        >
          <h2 class="text-xl font-semibold mb-2 text-gray-800">
            {{ "Proffessor: " + teacher.name }}
          </h2>
          <p>{{ "Disciplina: " + teacher.subject }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker";

export default {
  name: "TeacherList",
  data() {
    return {
      teachers: this.generateTeachers(10),
    };
  },
  methods: {
    generateTeachers(count) {
      const teachers = [];
      for (let i = 0; i < count; i++) {
        teachers.push({
          id: faker.datatype.uuid(),
          name: faker.name.fullName(),
          subject: faker.commerce.department(),
        });
      }
      return teachers;
    },
  },
};
</script>

<style scoped>
.teacher-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.teacher-list ul {
  list-style-type: none;
  padding: 0;
}

.teacher-list li {
  margin-bottom: 10px;
}
</style>
