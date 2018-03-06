export default {
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
  }
}
