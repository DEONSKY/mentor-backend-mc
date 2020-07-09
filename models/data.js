module.exports = (sequelize,DataTypes)=>{
    const data = sequelize.define("data",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        dataset_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:false
        },
        value:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
    },{timestamps: false});

    //data.removeAttribute('createdAt');
    //data.removeAttribute('updatedAt');

    return data;
};