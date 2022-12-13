const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "d7nns04t4q1ccg",
    "lmqixkgrrtlihz",
    "b0ddcf9bdbf1f199a969e0c8a4659c94321e71ae4fd26d2402b26f6d374052b0",
    {
        host: "ec2-3-219-19-205.compute-1.amazonaws.com",
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
export default connection;
