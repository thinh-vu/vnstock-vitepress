---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'img/thinhvu_avatar_about_me_square_color-1024x1024.jpg',
    name: 'Thinh Vu',
    title: 'Founder dự án',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/thinh-vu/' },
      { icon: 'github', link: 'https://github.com/thinh-vu' },
      { icon: 'facebook', link: 'https://facebook.com/mr.thinh.ueh' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCYgG-bmk92OhYsP20TS0MbQ?sub_confirmation=1' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>