<script>
    import { slide, fade } from 'svelte/transition';
    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";
</script>

<TabGroup>
  <div class="content-wrapper">
    <TabList class="video-tabs-list">
        <div class="flex">
            <Tab class={({selected}) => (selected ? "active" : "")}><slot name="tab-1">Tab 1</slot></Tab>
            <Tab class={({selected}) => (selected ? "active" : "")}><slot name="tab-2">Tab 2</slot></Tab>
        </div>
    </TabList>
  </div>
  <TabPanels id="panels">
    <TabPanel><slot name="panel-1">tab panel 1</slot></TabPanel>
    <TabPanel><slot name="panel-2">tab panel 2</slot></TabPanel>
  </TabPanels>
</TabGroup>


<style>
    .flex {
        display: flex;
        gap: 2rem;
    }
</style>