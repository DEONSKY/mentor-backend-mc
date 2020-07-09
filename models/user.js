module.exports = (sequelize,DataTypes)=>{
    const user = sequelize.define("user",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password_salt:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password_hash:{
            type:DataTypes.STRING,
            allowNull:false
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:true
        },
        updated_at:{
            type:DataTypes.DATE,
            allowNull:true
        },
        deleted_at:{
            type:DataTypes.DATE,
            allowNull:true
        },
    },{timestamps: false});

    user.associate = models => {
        user.hasMany(models.token,{
            onDelete:"cascade",
            foreignKey: 'user_id', 
            foreignKeyConstraint: true
        });
        user.hasMany(models.dataset,{
            onDelete:"cascade",
            foreignKey: 'user_id', 
            foreignKeyConstraint: true
        });
    };

    //user.removeAttribute('createdAt');
    //user.removeAttribute('updatedAt');

    return user;
};