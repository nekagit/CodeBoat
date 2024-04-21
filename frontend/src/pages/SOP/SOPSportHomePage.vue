<template>
  <div>
    <OAppearingTextImageCard
      :imgSrc="kros"
      :title="sop.news[0].title"
      :content="sop.news[0].content"
    />

    <OAppearingTextImageCard 
    :imgSrc="kros" 
    :title="sop.news[1].title" 
    :content="sop.news[1].content" 
    />
    
    <OAppearingTextImageCard 
    :imgSrc="kros" 
    :title="sport.news[0].title" 
    :content="sport.news[0].content" 
    />
    
    <ABaseCardAnBorder :variant="3"

    :title="school.news[0].title" 
    :content="school.news[0].content" />

    <ABaseCardAnBorder :variant="3"

    :title="school.news[1].title" 
    :content="school.news[1].content" />

    <ABaseCardAnBorder :variant="3"

    :title="school.news[2].title" 
    :content="school.news[2].content" />
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
interface AnnouncementNews {
  title: string,
  content: string
}
import kros from '@/assets/kros.png'
import ABaseCardAnBorder from '@/components/atoms/cards/ABaseCardAnBorder.vue'
import BaseFooter from '@/components/atoms/BaseFooter.vue'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import SchoolAnnouncements from '@/data/SOP/school/school.json'
import SportAnnouncements from '@/data/SOP/sport/sport.json'
import SOPAnnouncements from '@/data/SOP/sop.json'
const {school} = SchoolAnnouncements
const {sport} = SportAnnouncements
const {sop} = SOPAnnouncements

</script>

<style lang="scss" scoped></style>
