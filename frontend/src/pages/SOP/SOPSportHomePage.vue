<template>
  <div>
    <OAppearingTextImageCard
      :imgSrc="kros"
      :title="'Српско пријатељство из детињства СОП Сврха рада нашег друштва је: '"
      :content="krosContent"
    />

    <OAppearingTextImageCard :imgSrc="kros" :title="sopTitle" :content="sopContent" />
    <OAppearingTextImageCard :imgSrc="kros" :title="sopTitle" :content="sopContent" />
    <ABaseCardAnBorder :variant="5" :title="announcements.slogan" :content='announcements.contact'/>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import kros from '@/assets/kros.png'
import ABaseCardAnBorder from '@/components/atoms/cards/ABaseCardAnBorder.vue'
import BaseFooter from '@/components/atoms/BaseFooter.vue'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import SchoolAnnouncements from '@/data/SOP/school/school.json'
const {announcements} = SchoolAnnouncements

</script>

<style lang="scss" scoped></style>
