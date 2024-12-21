export type Social = {
  github?: string
  x?: string
  qq?: string
  wx?: string
  facebook?: string
  zhihu?: string
  email?: string
  discord?: string
  youtube?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/ragroup01',
  x: 'https://twitter.com/kuizuo',
  wx: 'https://img.kuizuo.cn/wechat.png',
  // qq: 'https://img.kuizuo.cn/qq.png',
  // zhihu: 'https://www.zhihu.com/people/kuizuo',
  facebook: 'https://music.163.com/#/user/home?id=1333010742',
  email: 'mailto:ralivemailme@gmail.com',
  discord: 'https://discord.gg/M8cVcjDxkz',
  youtube: 'https://youtube.com/@RaliveManagement',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  x: {
    href: social.x,
    title: 'X',
    icon: 'ri:twitter-x-line',
    color: '#000',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  discord: {
    href: social.discord,
    title: 'Discord',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  facebook: {
    href: social.facebook,
    title: '网易云',
    icon: 'ri:facebook-line',
    color: '#C20C0C',
  },
  youtube: {
    href: social.youtube,
    title: 'Youtube',
    icon: 'ri:youtube-fill',
    color: '#FF0000',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
