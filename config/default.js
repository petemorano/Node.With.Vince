//https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/

module.exports = {
  dbstring: {
    connection: "mongodb://localhost:27017/transactiondb"
  },
  redis: {
    url: "redis://some-redis-server:6379"
  },
  log: "debug"
};