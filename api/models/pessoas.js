'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        paranoid: true,
        //definindo padrão
        defaultScope: {
            where: {
                ativo: true
            },
            // outros scopes
            scopes: {
                todos: { where: {}}
            }
        }
    });
    Pessoas.associate = function(models) {
        Pessoas.hasMany(models.Turmas, {
            foreignKey: 'docente_id'
        })
        Pessoas.hasMany(models.Matriculas, {
            foreignKey: 'estudante_id'
        })

    };
    return Pessoas;
};
