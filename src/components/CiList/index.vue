<template>
    <div class="cinema_body">
        <Loading v-if="isLoading" />
        <scroller v-else>
        <ul>
            <li v-for="item in cinemas" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(num,index) in item.tag" v-if="num==1" :key="index" :class="index | classCard">{{index | formatCard}}</div>
                </div>
            </li>

        </ul>
        </scroller>
    </div>

</template>

<script>
    export default {
        name: "CiList",
        data(){
            return{
                cinemas:[],
                isLoading:true,
                prevCityId:-1
            }
        },
       activated(){
           var cityId =this.$store.state.city.id;
           if (this.prevCityId===cityId){return;}
           this.isLoading=true;
            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                console.log(res);
               var msg=res.data.msg;
               if (msg==='ok'){
                   this.cinemas=res.data.data.cinemas;
                   this.isLoading=false;
                   this.prevCityId=cityId;
               }
            });
        },
        filters:{
            formatCard(index){
                var card=[
                    {index:'allowRefund',value:'改签'},
                    {index:'endorse', value:'退签'},
                    {index:'sell',value:'折扣卡'},
                    {index:'snack',value:'小吃'}
                ];
                for (var i = 0; i <card.length ; i++) {
                    if(card[i].index===index){
                        return card[i].value;
                    }
                }
                return '';
            },
            classCard(index){
                var card=[
                    {index:'allowRefund',value:'bl'},
                    {index:'endorse', value:'bl'},
                    {index:'sell',value:'or'},
                    {index:'snack',value:'or'}
                ];
                for (var i = 0; i <card.length ; i++) {
                    if(card[i].index===index){
                        return card[i].value;
                    }
                }
                return '';
            }
        }
    }
</script>

<style scoped>
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>
