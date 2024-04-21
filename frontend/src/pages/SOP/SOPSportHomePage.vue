<template>
  <div>
    <ARandomMoving />
   
  </div>
</template>

<script setup lang="ts">
interface AnnouncementNews {
  title: string,
  content: string
}
import kros from '@/assets/kros.png'
import ABaseCardAnBorder from '@/components/atoms/cards/ABaseCardAnBorder.vue'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import SchoolAnnouncements from '@/data/SOP/school/school.json'
import SportAnnouncements from '@/data/SOP/sport/sport.json'
import SOPAnnouncements from '@/data/SOP/sop.json'
import ARandomMoving from '@/components/atoms/ARandomMoving.vue';
import OverlapScroll from '@/components/atoms/scroll/OverlapScroll.vue';
const {school} = SchoolAnnouncements
const {sport} = SportAnnouncements
const {sop} = SOPAnnouncements

</script>

<style lang="scss" scoped></style>
