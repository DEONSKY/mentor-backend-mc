
module.exports = (sequelize,DataTypes)=>{
    const dataset = sequelize.define("dataset",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        key_title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:true
        },  
    },{timestamps: false});

    dataset.associate = models => {
        dataset.hasMany(models.data,{
            onDelete:"cascade",
            foreignKey: 'dataset_id', 
            foreignKeyConstraint: true
        });
        dataset.hasMany(models.application,{
            onDelete:"cascade",
            foreignKey: 'dataset_id', 
            foreignKeyConstraint: true
        });
    };

    //dataset.removeAttribute('createdAt');
    //dataset.removeAttribute('updatedAt');

    return dataset;
};