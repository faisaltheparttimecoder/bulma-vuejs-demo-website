export default {
  methods: {
    lineData: function() {
      return {
        '2017-05-01': this.chartRandomValue(32),
        '2017-06-01': this.chartRandomValue(13),
        '2017-07-01': this.chartRandomValue(56),
        '2017-08-01': this.chartRandomValue(10),
        '2017-09-01': this.chartRandomValue(12),
        '2017-10-01': this.chartRandomValue(34),
        '2017-12-01': this.chartRandomValue(36),
        '2018-01-01': this.chartRandomValue(12)
      }
    },
    multipleLineData: function() {
      return [{
        name: 'USA',
        data: this.lineData()
      },{
        name: 'Brazil',
        data: this.lineData()
      },{
        name: 'India',
        data: this.lineData()
      },{
        name: 'UK',
        data: this.lineData()
      },{
        name: 'Australia',
        data: this.lineData()
      }]
    },
    chartRandomValue: function(x) {
      return Math.random() * x
    }
  }
}
