var info=require('./connect');//获取链接数据库中post表的sequelize对象


function Info(place,account,password)
{
   this.place=place;
   this.account=account;
   this.password=password;
};

module.exports=Info;


Info.prototype.save=function()
{
   info.create
   ({
    place: this.place,
    account:this.account,
    password:this.password
    });
}

Info.getAll=function(callback)
{
     info.findAll().then(function (Infos) {
               callback(Infos);
             })
}


