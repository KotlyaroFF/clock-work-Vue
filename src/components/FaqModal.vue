<script setup lang="ts">
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ (close: "close"): void }>();
</script>
<template>
  <ui-modal
    title="FAQ"
    :open="props.open"
    @close="emit('close')"
    :icon="InformationCircleIcon"
    size="3xl"
  >
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Accusamus aliquam fugiat hic
        ipsum maiores molestiae mollitia natus neque quos veritatis! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Atque et eum fugit illo
        iusto laboriosam, modi porro. Explicabo minima quas quisquam repudiandae
        tempora. Aliquam asperiores atque, culpa dolore eaque eum impedit
        laudantium molestiae nesciunt nihil nobis porro saepe similique tempore
        voluptate! Blanditiis deleniti dolor doloremque dolorum eum iusto
        maiores, nisi saepe. Atque, corporis deserunt dignissimos dolorem
        doloribus ea eaque earum eligendi est ex excepturi illum iste itaque
        libero minima minus modi nesciunt nihil odio omnis perspiciatis
        provident quibusdam quos repellendus suscipit totam unde, vel voluptas
        voluptatem voluptatibus! Adipisci consequuntur corporis dignissimos
        magni modi neque sint totam veniam. Animi consectetur consequuntur dolor
        esse et eum excepturi explicabo ipsa laboriosam, laudantium modi
        nesciunt quia quidem tenetur, vero. Aliquid aut consectetur consequatur
        cupiditate earum error et excepturi expedita facilis incidunt iste
        laudantium, magnam molestiae molestias mollitia nemo neque nihil
        obcaecati possimus quasi quibusdam quisquam quod vel velit veritatis. A
        ad adipisci aperiam, aspernatur assumenda commodi deleniti et excepturi
        exercitationem fuga labore, officia officiis quas quidem recusandae sit
        unde voluptates voluptatibus? Accusantium corporis doloremque modi
        nesciunt nostrum sed. Accusamus aut consequatur dolores doloribus est
        fuga illo ipsam, maxime molestias numquam optio porro quam quo quos
        recusandae reiciendis reprehenderit vel velit! Corporis fuga nam
        veritatis.
      </p>
    </div>
    <template #footer>
      <div
        class="bg-gray-50 px-4 py-3 flex flex-col gap-3 items-end sm:flex-row-reverse sm:px-6"
      >
        <ui-button
          color="error"
          title="Close"
          @click="emit('close')"
          class="w-max"
        />
      </div>
    </template>
  </ui-modal>
</template>
