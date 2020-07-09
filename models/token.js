module.exports = (sequelize,DataTypes)=>{
    const token = sequelize.define("token",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        token_value:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        ip_address:{
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

    //token.removeAttribute('createdAt');
    //token.removeAttribute('updatedAt');

    return token;
};