module.exports = (sequelize,DataTypes)=>{
    const application = sequelize.define("application",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        dataset_id:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        access_token:{
            type:DataTypes.STRING,
            allowNull:false
        },
        secret_token:{
            type:DataTypes.STRING,
            allowNull:false
        },
        permission_read:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        permission_write:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        permission_delete:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
    },{timestamps: false});
    //application.removeAttribute('createdAt');
    //application.removeAttribute('updatedAt');
    return application;
};