---
title: Active Record
category: rails
keywords: active record, associations,api
---
# API docs
[Modules index](https://api.rubyonrails.org/classes/ActiveRecord.html)  
[Query methods](https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html)  
[Associations](https://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html)  
[Persistence](https://api.rubyonrails.org/classes/ActiveRecord/Persistence.html)  
[Migrations](https://api.rubyonrails.org/classes/ActiveRecord/Migration.html)  


# Associaltions
`has_one` указывается на стороне родителя (сущности, у которой _нет внешнего ключа_)  
`belongs_to` указывается на зависимой стороне (сущности, _в которой определён_ внешний ключ)

### Использование join table
```
# post entity
has_many: :post_image_links, class_name: <join entity>, dependent: :destroy
has_many: :images, class_name: <target entity>, through: :post_image_links
```

## Properties

### has_one

### belongs_to

* :autosave
* __:class_name__
* :counter_cache
* :dependent - :delete | :destroy если родительская сущность будет удалена
  - по дефолту ссылка обнулится
* __:foreign_key__
* :primary_key
* __:inverse_of__
* :polymorphic
* :touch
* :validate
* __:optional__


### has_many

* :as
* :autosave
* __:class_name__
* :counter_cache
* __:dependent__
* __:foreign_key__
* __:inverse_of__
* :primary_key
* :source
* :source_type
* :through
* :validate

# Enums
[API](https://api.rubyonrails.org/classes/ActiveRecord/Enum.html)
```ruby
class Conversation < ActiveRecord::Base
  enum status: { active: 0, archived: 1 }
end
conversation.status = "archived"
conversation.archived!
conversation.archived? # => true
conversation.status    # => "archived"
Conversation.statuses[:active]    # => 0
```
