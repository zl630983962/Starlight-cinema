export default {
  path: '/movie',
  component:()=> import('@/views/Movie'),
  children:[

    {
      path:'city',
      component:()=>import('@/components/City')
    },
    {
      path:'nowPlaying',
      component:()=>import('@/components/NowPlaying')
    },
    {
      path:'shangyin',
      component:()=>import('@/components/Shangyin')
    },
    {
      path:'search',
      component:()=>import('@/components/Search')
    },
    {
      path: 'detail/1/:movieId',
      components:{
        default:()=>import('@/components/NowPlaying'),
        detail:()=>import('@/views/Movie/detail')
      },
      props : {
        detail :true
      }
    },
    {
      path: 'detail/2/:movieId',
      components:{
        default:()=>import('@/components/Shangyin'),
        detail:()=>import('@/views/Movie/detail')
      },
      props : {
        detail :true
      }
    },

    {
      path:'/movie',
      redirect:'/movie/nowPlaying'
    }
  ]
}
