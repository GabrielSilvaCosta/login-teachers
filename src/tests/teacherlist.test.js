import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TeacherList from "../components/TeacherList.vue";

describe("TeacherList", () => {
    it("renders properly", () => {
        const wrapper = mount(TeacherList);
        expect(wrapper.html()).toMatchSnapshot();
    });
})