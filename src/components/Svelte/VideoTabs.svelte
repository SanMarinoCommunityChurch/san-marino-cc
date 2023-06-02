<script>
  import {getSanityData} from '../../lib/sanity'
    import { onMount } from "svelte"
    import { slide, fade } from 'svelte/transition';
    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";

    function updateURLHash(e) {
      let url = window.location;
      if (url.hash) {
        url.hash = "";
      }
      switch(e.detail) {
        case 0:
          console.log('Changed tab to', e.detail)
          url.hash = '#traditional'
          break;
        case 1:
          console.log('Changed tab to', e.detail);
          url.hash = '#contemporary'
          break;
      }
      return url
    }

    function setDefault(location) {
      let tabIndex = 0;
      if (location.hash === '#contemporary') {
        tabIndex = 1;
      } 
      console.log('mounted with', tabIndex);
      return tabIndex;
    }

    // onMount(() => {
    //   setDefault(window.location);
    // })

    //onMount(() => setDefault(window.location))} on:change={(e) => updateURLHash(e)

</script>

<TabGroup defaultIndex={0}>
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