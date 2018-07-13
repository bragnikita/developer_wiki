---
title: Active Record associations
category: rails
keywords: active record, associations
---

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
