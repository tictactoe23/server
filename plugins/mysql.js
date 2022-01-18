const mysql = require("mysql2/promise");

class DataBase {
  constructor(database) {
    this.database = database;
  }

  async addGame(game) {
    return await this.querySQL(
      `INSERT INTO \`game\`(\`win\`, \`move\`) VALUES ('${game.win}','${game.move}')`
    );
  }

  async getGames() {
    return await this.querySQL(
      `SELECT * FROM game ORDER BY datetime DESC LIMIT 10`
    );
  }

  async getAdmin(data) {
    return await this.querySQL(
      `SELECT * FROM admin WHERE token = '${data}' OR login = '${data}'`
    );
  }

  async querySQL(sql) {
    const conn = await mysql.createConnection(this.database);
    const [rows] = await conn.execute(sql);
    conn.end();
    return rows;
  }
}

module.exports = DataBase;
