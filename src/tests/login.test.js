import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Login from "../components/Login.vue";

describe("Login", () => {
  it("renders properly", () => {
    const wrapper = mount(Login);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("validates email", () => {
    const wrapper = mount(Login);
    const emailInput = wrapper.find('input[name="email"]');
    emailInput.setValue("invalid-email");
    expect(wrapper.vm).toMatchSnapshot();
  });

  it("validates password", () => {
    const wrapper = mount(Login);
    const passwordInput = wrapper.find('input[name="password"]');
    passwordInput.setValue("invalid-password");
    expect(wrapper.vm).toMatchSnapshot();
  });

  it("submits form", () => {
    const wrapper = mount(Login);
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(wrapper.vm).toMatchSnapshot();
  });

  it("submit a invalid form", () => {
    const wrapper = mount(Login);
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(wrapper.vm).toMatchSnapshot();
  });
});

it("redirects to a teacher route", () => {
  const wrapper = mount(Login);
  const form = wrapper.find("form");
  form.trigger("submit");
  expect(wrapper.vm).toMatchSnapshot();
});
