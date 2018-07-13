mysql.md
# MySql snippets

## Admin
### create user
```
CREATE USER 'finley'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'finley'@'%'
#or
GRANT ALL PRIVILEGES ON mydatabase.* TO 'finley'@'%'
```
### create database
```
CREATE DATABASE IF NOT EXISTS database_name  DEFAULT COLLATE utf8_general_ci DEFAULT CHARACTER SET utf8;
ALTER SCHEMA database_name DEFAULT COLLATE utf8_bin ;
USE database_name;
```