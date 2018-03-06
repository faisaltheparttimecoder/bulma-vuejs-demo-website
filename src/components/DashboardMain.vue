<template>
  <div>

    <div class="columns">
      <div v-for="(salesNumber, index) in salesNumbers" class="column is-3">
        <div v-randomColor="index" class="box is-primary">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <i v-bind:class="salesNumber.icon"></i>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <article class="level">
                  <div class="level-left">
                  </div>
                  <div class="level-right">
                    <div class="level-item ">
                      <div>
                        <p class="heading">{{ salesNumber.title }}</p>
                        <p class="title salesnumbers">
                          $ {{ salesNumber.number | randomNumber }}M</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div v-for="headingChart in headingCharts1" class="column is-6">
        <div class="box">
          <h1 class="heading"> {{ headingChart }} </h1>
          <trend
            :data=randomArray()
            :gradient="randomColors()"
            auto-draw
            smooth>
          </trend>
        </div>
      </div>
    </div>

    <div class="columns">
      <div v-for="headingChart in headingCharts2" class="column is-6">
        <div class="box">
          <h1 class="heading"> {{ headingChart }} </h1>
          <trend
            :data=randomArray()
            :gradient="randomColors()"
            auto-draw
            ease-in>
          </trend>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <h1 class="heading"> Sales order | YTD </h1>
          <br/>
          <table class="table">
            <thead>
            <tr>
              <th v-for="salesTableHeading in salesTableHeadings">{{ salesTableHeading }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="salesTableData in salesTableDatas">
              <td> {{ salesTableData.date }}</td>
              <td> {{ salesTableData.region }}</td>
              <td> {{ salesTableData.rep }}</td>
              <td> {{ salesTableData.item }}</td>
              <td> {{ 1000 | randomNumber }}</td>
              <td> ${{ 100 | randomNumber }}K</td>
              <td> ${{ 1000 | randomNumber }}K</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: function(){
        return {
          salesNumbers: [{
            title: 'POTENTIAL SALES | YTD',
            number: '100',
            icon: 'fas fa-flask fa-4x'
          },{
            title: 'TOTAL SALES | YTD',
            number: '75',
            icon: 'fas fa-euro-sign fa-4x'
          },{
            title: 'PROFIT | YTD',
            number: '50',
            icon: 'far fa-money-bill-alt fa-4x'
          },{
            title: 'LOSSES | YTD',
            number: '25',
            icon: 'fas fa-thumbs-down fa-4x'
          }],
          salesTableHeadings: [
            'Order Date',
            'Region',
            'Representative',
            'Item',
            'Units',
            'Unit Cost',
            'Total'
          ],
          salesTableDatas: [{
              'date': '2016/06/20',
              'region': 'East',
              'rep': 'Jones Lee',
              'item': 'Pencil'
            },{
              'date': '2017/02/12',
              'region': 'West',
              'rep': 'Mick Pension',
              'item': 'Pen'
            },{
              'date': '2017/03/23',
              'region': 'Central',
              'rep': 'Jonny Jackson',
              'item': 'Desk'
            },{
              'date': '2016/09/20',
              'region': 'East',
              'rep': 'Pones Estests',
              'item': 'Book'
            },{
              'date': '2017/12/12',
              'region': 'West',
              'rep': 'Venkat Raghavan',
              'item': 'Pencil'
            },{
              'date': '2018/01/20',
              'region': 'Central',
              'rep': 'Yi Lee',
              'item': 'Binders'
            },{
              'date': '2018/02/12',
              'region': 'East',
              'rep': 'Jacky Yu',
              'item': 'Pen'
            },{
              'date': '2017/11/11',
              'region': 'East',
              'rep': 'Paul Jones',
              'item': 'Pencil'
            },{
              'date': '2017/05/12',
              'region': 'West',
              'rep': 'Ryan Sun',
              'item': 'Books'
            }, {
              'date': '2018/03/01',
              'region': 'Central',
              'rep': 'Ahmed Estes',
              'item': 'Desk'
            }],
          headingCharts1: ['companies stock price | YTD', 'Companies profit | YTD'],
          headingCharts2: ['companies growth | YTD', 'Companies losses | YTD']

        }
    },
    methods: {
      randomArray: function() {
        var arr = [];
        for (var i=0, t=10; i<t; i++) {
          arr.push(Math.round(Math.random() * t))
        }
        return arr
      },
      randomColors: function() {
        var arr = [];
        for (var i=0, t=2; i<t; i++) {
          arr.push("#" + Math.random().toString().slice(2,8))
        }
        return arr
      }
    },
    directives: {
      randomColor: {
        bind(el, binding, vnode) {
          var colorPicker = ['#353535', '#00d1b2', '#209cef', '#ff3860']
          el.style.backgroundColor = colorPicker[binding.value];
          el.style.color = "#fff";
        }
      }
    }
  }

</script>

<style scoped>

  table {
    width: 100%
  }

  table > thead > tr, table > tbody > tr {
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .salesnumbers {
    float: right;
    color: #fff;
  }


</style>
