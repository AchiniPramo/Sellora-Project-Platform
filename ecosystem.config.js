module.exports = {
  apps : [
    {
      name   : "user-service",
      script : "java",
      args   : "-Xmx128m -jar user-service/target/User-Service-1.0.0.jar",
      log_file: "./logs/user-service.log",
      instances: 2,
    },
    {
      name   : "item-service",
      script : "java",
      args   : "-Xmx128m -jar item-service/target/Item-Service-1.0.0.jar",
      log_file: "./logs/item-service.log",
      instances: 2,
    },
    {
      name   : "order-service",
      script : "java",
      args   : "-Xmx128m -jar order-service/target/Order-Service-1.0.0.jar",
      log_file: "./logs/order-service.log",
      instances: 2,
    }
  ]
}