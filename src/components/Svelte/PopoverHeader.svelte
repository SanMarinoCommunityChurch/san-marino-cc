<script>
    import { slide, fade } from 'svelte/transition';
    import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";

    // function handleClick(open) {
    //     const body = document.querySelector("body");
    //     if (!open) {
    //         body.style.overflow = 'hidden'
    //     } else {
    //         body.style.overflow = 'unset'
    //     }
    //     console.log(open && `clicked ${open}`)
    //     // body.style.overflow !== 'hidden' ? body.style.overflow === 'hidden' : body.style.overflow === 'unset'
    // }

   

    // const body = document.querySelector("body");
    // if (!open) {
    //     body.style.overflow = 'hidden'
    // } else {
    //     body.style.overflow = 'unset'
    // }
</script>

<Popover as="nav" let:open>
    <div class="site-nav" style="--menu-toggle-shadow:{open ? "" : "var(--box-shadow)"}">
        <div><slot name="logo"></slot></div>
        <div><slot name="mainNav"></slot></div>
        <div class="header-buttons cluster">
            <slot name="headerCTAButton"></slot>
            <PopoverButton class="menu-toggle">
                <div class="menu-toggle-container" class:open style="--menu-toggle-bg:{open ? "var(--color-neutral-100)" : ""}">
                    {#if open}
                        <span class="sr-only">Close Panel</span>
                        <svg width="40" height="40" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12L23.3137 23.3137" stroke="var(--color-primary-600)" stroke-linecap="round"/>
                            <path d="M12 23.3137L23.3137 12" stroke="var(--color-primary-600)" stroke-linecap="round"/>
                        </svg>
                    {:else}
                        <span class="sr-only">Open Panel</span>
                        <svg width="40" height="40" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10H33" stroke="var(--color-primary-800)" stroke-linecap="round"/>
                            <path d="M3 17H33" stroke="var(--color-primary-800)" stroke-linecap="round"/>
                            <path d="M12 24L33 24" stroke="var(--color-primary-800)" stroke-linecap="round"/>
                        </svg>
                    {/if}
                </div>
            </PopoverButton>
        </div>
        <div class="rule" style="--opacity:{open ?  "0.15" : "0"}"></div>
        {#if open}
        <div class="nav-panel" transition:slide={{ duration: 200 }}>
            <div class="nav-wrapper" transition:fade={{ duration: 400, delay: 100 }}>
                <PopoverPanel static>
                    <slot name="panel"></slot>
                </PopoverPanel>
            </div>
        </div>
        {/if}
    </div>
</Popover>



<style>
    .site-nav {
        --box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        position: relative;
        display: grid;
        column-gap: 0.5rem;
        row-gap: 0;
        grid-template-columns: 1fr 2fr 1fr;
        justify-content: center;
        align-items: center;
        background-color: var(--color-white);
        padding-block: 6px;
        padding-inline: var(--space-l);
        box-shadow: var(--menu-toggle-shadow);
        transition: box-shadow 0.2s ease;
    }

    .site-nav :nth-child(3) {
        justify-self: end;
    }

    .site-nav > * {
        position: relative;
        z-index: 50;
    }

    .rule {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 51;
        opacity: var(--opacity);
        height: 1px;
        background-color: var(--color-primary-500);
        transition: opacity 0.3s ease 0.1s;
    }

    .menu-toggle-container {
        display: flex;
        background-color: var(--menu-toggle-bg);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }

    .menu-toggle-container:hover {
        background-color: var(--color-neutral-100);
    }

    .nav-panel {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
        background: var(--color-white);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1)
    }

    .nav-wrapper {
        width: 100%;
    }

    .header-buttons.cluster {
        --align: center;
        --justify: center;
    }

    @media (max-width: 1024px) {
        .site-nav {
            padding-inline: var(--space-s);
        }
    }

    @media (max-width: 768px) {
        .site-nav {
            grid-template-columns: 1fr 1fr;
            padding-inline: var(--space-s);
        }

        .header-buttons {
            grid-row: 1/1;
            grid-column: 2/2;
        }

        .nav-panel {
            height: 100vh;
            overflow: scroll;
        }
    }

    @media (max-width: 480px) {
        .site-nav {
            grid-template-columns: 2fr 1fr;
        }
    }
</style>