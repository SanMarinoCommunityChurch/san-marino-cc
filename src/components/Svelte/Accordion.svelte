<script>
    import { slide, fade } from 'svelte/transition';
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    } from "@rgossiaux/svelte-headlessui";
</script>

<Disclosure let:open>
  <DisclosureButton class="disclosure-button">
    <div class="question-wrapper">
        <slot name="question">Question?</slot>
        <svg class="chevron" class:open xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 320 512" width="18" height="18" fill="var(--svg-fill)" style="--disclosure-toggle:{open && "rotate(90deg)"}"><path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"/></svg>
    </div>
</DisclosureButton>

  {#if open}
    <div transition:slide>
        <DisclosurePanel static>
            <div class="answer-wrapper">
                <slot name="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit ad cum exercitationem rem praesentium odit nemo
              dolore? Accusamus, id non.</slot>
            </div>
        </DisclosurePanel>
    </div>
  {/if}
</Disclosure>

<style>
    .question-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-semi);
        background-color: var(--color-primary-100);
        color: var(--color-primary-800);
        padding: 1rem 1.75rem;
        border-radius: var(--rounded-corners);
        font-size: var(--step-1);
        width: 100%;
        transition: background-color 0.2s ease;
    }

    .question-wrapper:hover {
        background-color: var(--color-primary-200);
    }

    .answer-wrapper {
        padding: 2rem;
    }

    .chevron {
        --svg-fill: var(--color-primary-400);
        transform: var(--disclosure-toggle);
        transition: transform 0.2s ease;
    }
</style>