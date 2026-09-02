<script setup lang="ts">
import {
    TabsContent,
    TabsIndicator,
    TabsList,
    TabsRoot,
    TabsTrigger,
} from "reka-ui";
</script>

<template>
    <tabs-root default-value="tab-overview">
        <tabs-list class="event__tabs-list | cluster">
            <tabs-indicator class="event__tabs-indicator">
                <div class="event__tabs-indicator-content"></div>
            </tabs-indicator>
            <tabs-trigger class="event__tabs-trigger" value="tab-overview"
                >Overview</tabs-trigger
            >
            <tabs-trigger class="event__tabs-trigger" value="tab-speakers"
                >Speakers</tabs-trigger
            >
            <tabs-trigger class="event__tabs-trigger" value="tab-schedule"
                >Schedule</tabs-trigger
            >
        </tabs-list>
        <tabs-content value="tab-overview">
            <slot name="tab-overview"></slot>
        </tabs-content>
        <tabs-content value="tab-speakers">
            <slot name="tab-speakers"></slot>
        </tabs-content>
        <tabs-content value="tab-schedule">
            <slot name="tab-schedule"></slot>
        </tabs-content>
    </tabs-root>
</template>

<style>
.event__tabs-list {
    --cluster-space: 0.75rem !important;
    position: relative;
    border-block-end: 1px solid var(--color-neutral-100);
}

.event__tabs-trigger {
    font-size: var(--step-1);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-header);
    line-height: 1.15;
    border-radius: var(--rounded-corners);
    padding: 0.6rem 0.75rem;
    border: 0;
    margin: 0;
    color: var(--color-primary-800);
    background-color: transparent;
    cursor: pointer;
    text-decoration: none !important;
    appearance: none;
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-primary-100);
    }

    &[data-state="active"] {
        color: var(--color-primary-700);
    }
}

.event__tabs-indicator {
    position: absolute;
    left: 0;
    height: 2px;
    bottom: -1px;
    width: var(--reka-tabs-indicator-size);
    transform: translateX(var(--reka-tabs-indicator-position));
    border-radius: 9999px; /* rounded-full equivalent */
    transition-property: width, transform;
    transition-duration: 300ms;
}

.event__tabs-indicator-content {
    background-color: var(--color-primary-700);
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 375px) {
    .event__tabs-list {
        --cluster-space: 2px !important;
    }

    .event__tabs-trigger {
        font-size: 16px;
    }
}
</style>
