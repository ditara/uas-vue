import { shallowMount } from '@vue/test-utils';
import Links from '@/components/Links.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('Links.vue', () => {
  it('Render PropsData dengan link lain 1', () => {
    expect(
      getMountedComponent(Links, {
        linkref: 'Test 1 Link',
      }).text(),
    ).toBe('Test 1 Link');
  });

  it('Render PropsData dengan link lain 2', () => {
    expect(
      getMountedComponent(Links, {
        linkref: 'Test 2 Link',
      }).text(),
    ).toBe('Test 2 Link');
  });
});
