import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Login from "../components/Login.vue";

describe("Login", () => {
    it("renders properly", () => {
        const wrapper = mount(Login);
        expect(wrapper.html()).toMatchSnapshot();
    });
})