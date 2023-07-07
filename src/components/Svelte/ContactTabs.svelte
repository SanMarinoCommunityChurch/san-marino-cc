<script>
    import { onMount } from "svelte"
    import { slide, fade } from 'svelte/transition';
    import SvelteForm from "./SvelteForm.svelte";
    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";

    export let forms;
    
</script>

<TabGroup>
    <TabList class="form-tablist">
      {#each forms as form (form.id)}
        <Tab class="form-tab">{form.title}</Tab>
    {/each}
  </TabList>
  <TabPanels>
    {#each forms as form (form.id)}
      <TabPanel>
        <SvelteForm formData={form} />
      </TabPanel>
    {/each}
  </TabPanels>
</TabGroup>