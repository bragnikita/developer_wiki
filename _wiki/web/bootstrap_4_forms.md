---
title: Bootstrap 4 forms
categories:
  - web
  - css
keywords: bootstrap, css, styling, forms
---
* form.form
  - .form-group
    - label.col-form-label[-{lg/sm}]
    - input[text/select/textarea].form-control[-{lg/sm}]
    - input[checkbox/radio].form-check-input
    - input[file].form-control-file
    - control[readonly]/[disabled]
    - fieldset[disabled] чтобы выключить весь сет
    - .form-control-plaintext - контрол выглядит как текст
    - .form-text/.text-muted для текста подсказки
  - .form-check для checkbox-а или радиобаттона
    - label.form-check-label
    - input[checkbox/radio].form-check-input  
  - .form-check.form-check-inline для инлайновых чекбоксов/радио
  - .form-row для строчного размещения групп (лейбл сверху)
    - .form-group.col-
  - .form-group.row для строчного размещения контролов (лейбл сбоку)
    - .col-
* form.form-inline для формы в одну линию

## Валидация
* form[novalidate].was-validated
  - {valid/invalid}-feedback для сообщения об ошибке
  - :invalid/:valid псевдоклассы на контролы
  - .is-valid/.is-invalid на контролы

## Custom-контролы
* div.custom-control[.custom-control-inline]
  - control.custom-control прячет реальный инпут  
  - label.custom-control-label  
* select.custom-select
* div.custom-file
  - input.custom-file-input
  - label.custom-file-label
