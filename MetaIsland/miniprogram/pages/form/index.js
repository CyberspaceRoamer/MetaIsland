Page({
    data:{
        date: ""
    },
    submit: function(e) {
        console.log(e);
    },
    dateChange: function (e) {
        this.setData({
            date: e.detail.value,
        });
    },
    regionChange: function (e) {
        this.setData({
            region: e.detail.value,
        });
    }
})