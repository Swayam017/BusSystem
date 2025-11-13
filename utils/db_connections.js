const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "Mitaliguli017#", {
    host: "localhost",
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Sequelize connected successfully");
    } catch (error) {
        console.error("Unable to connect:", error);
    }
})();

module.exports = sequelize;
