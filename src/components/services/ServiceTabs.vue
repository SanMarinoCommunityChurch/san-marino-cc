<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "reka-ui";

interface Props {
    serviceTypes: {
        serviceTime: string;
        serviceTitle: string;
    }[];
}

const { serviceTypes } = defineProps<Props>();
</script>

<template>
    <tabs-root default-value="tab-1">
        <tabs-list class="content-wrapper service-tabs center-items">
            <tabs-trigger
                v-for="(type, i) in serviceTypes"
                :value="`tab-${i + 1}`"
                class="service-tab"
                ><span>{{ type.serviceTime }}</span
                ><br /><span>{{ type.serviceTitle }}</span></tabs-trigger
            >
        </tabs-list>
        <tabs-content v-for="(_, i) in serviceTypes" :value="`tab-${i + 1}`">
            <slot :name="`tab-content-${i + 1}`"></slot>
        </tabs-content>
    </tabs-root>
</template>
