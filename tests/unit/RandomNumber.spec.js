import { shallowMount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber";

describe("RandomNumber", () => {
  test("by default the random number should be 0", () => {
    const wrapper = shallowMount(RandomNumber);
    expect(wrapper.vm.$data.randomNumber).toEqual(0);
  });

  test("if we click the generate button we should get a random number between 1 and 10", () => {
    const wrapper = shallowMount(RandomNumber);
    wrapper.find(".btn").trigger("click");
    const randomNumber = wrapper.vm.$data.randomNumber;
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThan(11);
  });

  test("if we click the generate button we should get a random number between 100 and 200", () => {
    const wrapper = shallowMount(RandomNumber, {
      propsData: {
        min: 100,
        max: 200
      }
    });
    wrapper.find(".btn").trigger("click");
    const randomNumber = wrapper.vm.$data.randomNumber;
    console.log(randomNumber);
    expect(randomNumber).toBeGreaterThanOrEqual(100);
    expect(randomNumber).toBeLessThan(201);
  });
});
