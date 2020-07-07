### 字符串
````
DataTypes.STRING             // VARCHAR(255)
DataTypes.STRING(1234)       // VARCHAR(1234)
DataTypes.STRING.BINARY      // VARCHAR BINARY
DataTypes.TEXT               // TEXT
DataTypes.TEXT('tiny')       // TINYTEXT
DataTypes.CITEXT             // CITEXT          仅 PostgreSQL 和 SQLite.
````

### 布尔
````
DataTypes.BOOLEAN            // TINYINT(1)
````

### 数字
````
DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)

DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)

DataTypes.REAL               // REAL            仅 PostgreSQL.
DataTypes.REAL(11)           // REAL(11)        仅 PostgreSQL.
DataTypes.REAL(11, 12)       // REAL(11,12)     仅 PostgreSQL.

DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)

DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)
````

### 无符号和零填充整数 - 仅限于MySQL/MariaDB
````
DataTypes.DATE       // DATETIME 适用于 mysql / sqlite, 带时区的TIMESTAMP 适用于 postgres
DataTypes.DATE(6)    // DATETIME(6) 适用于 mysql 5.6.4+. 支持6位精度的小数秒
DataTypes.DATEONLY   // 不带时间的 DATE
````

### UUID
对于 PostgreSQL 和 SQLite,它会是 UUID 数据类型;对于 MySQL,它则变成CHAR(36).

Sequelize 可以自动为这些字段生成 UUID

````
{
  type: DataTypes.UUID,
  defaultValue: Sequelize.UUIDV4 // 或 Sequelize.UUIDV1
}
````

### 其他

