import SequelizeAuto from "sequelize-auto";
import { config } from "dotenv";
config();

const auto = new SequelizeAuto(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        directory: "./pgsql",
        port: Number(process.env.DB_PORT || 5432),
        lang: "ts",
        singularize: true,
        useDefine: false,
    },
);

auto.run()
    .then(() => console.info("DB Models Generated"))
    .catch(console.error);
