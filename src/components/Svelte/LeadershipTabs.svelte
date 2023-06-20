<script>
    import { slide, fade } from 'svelte/transition';
    import { Transition } from "@rgossiaux/svelte-headlessui";
    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";

      let show = false;
</script>

<TabGroup defaultIndex={0}>
  <div class="">
    <TabList class="leadership-tabs-list" id="leadership">
        <div class="flex">
            <Tab class={({selected}) => (selected ? "active" : "")}><slot name="tab-1">Tab 1</slot></Tab>
            <Tab class={({selected}) => (selected ? "active" : "")}><slot name="tab-2">Tab 2</slot></Tab>
        </div>
    </TabList>
  </div>
  <TabPanels id="panels">
        <TabPanel>
            <slot name="panel-1">tab panel 1</slot>
        </TabPanel>
        <TabPanel>
            <slot name="panel-2">tab panel 2</slot>
        </TabPanel>
  </TabPanels>
</TabGroup>

<style>
    .flex {
        display: flex;
        gap: 2rem;
    }

    .flex {
        border-bottom: 1px solid var(--color-primary-300);
    }

    .tab-transition {
  transition: all 0.5s ease;
}

.tab-transition-start {
  opacity: 0;
  transform: translateY(2rem);
}

.tab-transition-end {
  opacity: 1;
  transform: translateY(0);
}
</style>