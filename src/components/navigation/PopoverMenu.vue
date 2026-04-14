<script setup lang="ts">
import {
    NavigationMenuContent,
    NavigationMenuItem,
    // NavigationMenuLink,
    // NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "reka-ui";
import { ref } from "vue";

const popover = ref();
</script>

<template>
    <navigation-menu-root
        :disable-hover-trigger="true"
        :disable-pointer-leave-close="true"
        v-model:model-value="popover"
    >
        <navigation-menu-item as="div">
            <navigation-menu-trigger class="menu-toggle-container">
                <template v-if="popover">
                    <span class="sr-only">Close Panel</span>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 12L23.3137 23.3137"
                            stroke="var(--color-primary-600)"
                            stroke-linecap="round"
                        />
                        <path
                            d="M12 23.3137L23.3137 12"
                            stroke="var(--color-primary-600)"
                            stroke-linecap="round"
                        />
                    </svg>
                </template>
                <template v-else>
                    <span class="sr-only">Open Panel</span>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 10H33"
                            stroke="var(--color-primary-800)"
                            stroke-linecap="round"
                        />
                        <path
                            d="M3 17H33"
                            stroke="var(--color-primary-800)"
                            stroke-linecap="round"
                        />
                        <path
                            d="M12 24L33 24"
                            stroke="var(--color-primary-800)"
                            stroke-linecap="round"
                        />
                    </svg>
                </template>
            </navigation-menu-trigger>
            <navigation-menu-content class="nav-panel">
                <div class="nav-wrapper">
                    <slot></slot>
                </div>
            </navigation-menu-content>
        </navigation-menu-item>
    </navigation-menu-root>
</template>

<style>
.nav-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 80dvh; */
    overflow-y: scroll;
    z-index: -1;
    background: var(--color-white);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

    &[data-state="open"] {
        animation: fadeIn 150ms ease-out;
    }

    &[data-state="closed"] {
        animation: fadeOut 200ms ease-in;
    }
}

.nav-wrapper {
    width: 100%;
}

.menu-toggle-container {
    display: flex;
    background-color: var(--menu-toggle-bg);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    appearance: none;
    border: 0;
    cursor: pointer;

    &:hover {
        background-color: var(--color-neutral-100);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        /* height: 0%; */
    }
    to {
        opacity: 1;
        /* height: 100%; */
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        height: 0;
    }
}

@media (max-width: 870px) {
    .nav-wrapper {
        height: 100dvh;
        overflow-y: scroll;
    }
}
</style>
