---
category: rails
keywords: rails, migration, db
---
# Migrations

## Migration file pattern
```ruby
class CreateMainTables < ActiveRecord::Migration[5.1]
  def change
  // команды здесь автоматически поворачиваются вспять при откате ( create drop )
  end

  // or

  def up
   // <add changes commands>
  end
  def down
   // <rollback changes commands>
  end
end
```  

## Create table
```
create_table :images do |t|
    t.string :link
    t.string :type
    t.timestamps
end
```
### Types
primary_key, string, text, integer, bigint, float, decimal, numeric, datetime, time, date, binary, boolean

### Options
default, null, precision, scale, limit

## References
### Foreign key
`add_reference {table}, {foreign_key_col}, references:{referenced_table}, null:{true|false}, index:{true|false}, foreign_key: {to_table: {referenced_table}, on_delete: {:nullify|:cascade|:restrict}}`

### Linking table
```
create_table :characters_and_lists, id: false do |t|
  t.belongs_to :character_lists, index: true, foreign_key: true
  t.belongs_to :characters, index: true, foreign_key: true
end

or

create_join_table {table_1}, {table_2}, options: { :table_name } do |t|
  t.index :table_1_id
  t.index :table_2_id
end
// <DROP>
drop_join_table {table_1}, {table_2}, options: { }
```

## Existence checks
* tables,views,columns,indexes, foreign_keys - list of objects in the database/table
* native_database_types
* primary_key {table}
* table_exists? {table_name}
  - view_exists?
  - column_exists? {table}, , {column}, {type}, {options}
    - c.name
    - c.type
    - c.{column_option_attr_name}
  - index_exists {}
  - foreign_key_exists {}

## API reference
* defenitions
  - `ActiveRecord::ConnectionAdapters::SchemaStatements`
