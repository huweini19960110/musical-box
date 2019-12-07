import Nav from '@/components/Nav'
import NewSong from '@/components/views/Newsong/NewSong'
import Rank from '@/components/views/Rank/Rank'
import SongList from '@/components/views/SongList/SongList'
import Singer from '@/components/views/Singer/Singer'


const navlist = [
    {
      path: '/',
      name: 'Newsong',
      meta: {
        title: '新歌'
      },
      components: {
        default: NewSong,
        Onav: Nav
      }
    },{
      path: '/rank',
      name: 'Rank',
      meta: {
        title: '排行'
      },
      components: {
        default: Rank,
        Onav: Nav
      }
  
  
    },{
      path: '/songlist',
      name: 'Songlist',
      meta: {
        title: '歌单'
      },
      components: {
        default: SongList,
        Onav: Nav
      }
  
  
    },{
      path: '/Singer',
      name: 'Singer',
      meta: {
        title: '歌手'
      },
      components: {
        default: Singer,
        Onav: Nav
      }
    }
  ]
  

  export default navlist