---
category: rails
---
# Controller
[Official documentation](https://guides.rubyonrails.org/action_controller_overview.html)  
Implementing controller tests with JWT auth  
<http://aalvarez.me/blog/posts/testing-a-rails-api-with-rspec.html>  
`render` API examples  
<https://apidock.com/rails/ActionController/Base/render>

## Strong Parameters
<http://api.rubyonrails.org/classes/ActionController/Parameters.html>

`ActionController::Parameters`:
* permit full hash: `params.permit(preferences: {})`
* permit array of scalars: `params.permit(tags: [])`
* `require` checks existence of the specified parameter/array of names and returns it (otherwise rises a `ActionController::ParameterMissing` exception).
* force parameters to become permitted: `params.permit!`
* filter parameters: `params.reject(&block)/reject!(&block)`
* `slice/slice!(keys...)` returns new parameters instance, than inclues only given keys (or empty)
* `except/except!(keys...)` creates new parameters without given keys
* `dig(keys chain...)` returns nested parameter or nil if intermediate step is nil
* `key?/has_key?/include? key`

`ActionController::Parameters.action_on_unpermitted_parameters = :raise`
* `false` - just filter out (default for prod)
* `raise`, `log` (default for dev)


## Status codes
```
100 = :continue
101 = :switching_protocols
102 = :processing
200 = :ok
201 = :created
202 = :accepted
203 = :non_authoritative_information
204 = :no_content
205 = :reset_content
206 = :partial_content
207 = :multi_status
226 = :im_used
300 = :multiple_choices
301 = :moved_permanently
302 = :found
303 = :see_other
304 = :not_modified
305 = :use_proxy
307 = :temporary_redirect
400 = :bad_request
401 = :unauthorized
402 = :payment_required
403 = :forbidden
404 = :not_found
405 = :method_not_allowed
406 = :not_acceptable
407 = :proxy_authentication_required
408 = :request_timeout
409 = :conflict
410 = :gone
411 = :length_required
412 = :precondition_failed
413 = :request_entity_too_large
414 = :request_uri_too_long
415 = :unsupported_media_type
416 = :requested_range_not_satisfiable
417 = :expectation_failed
422 = :unprocessable_entity
423 = :locked
424 = :failed_dependency
426 = :upgrade_required
500 = :internal_server_error
501 = :not_implemented
502 = :bad_gateway
503 = :service_unavailable
504 = :gateway_timeout
505 = :http_version_not_supported
507 = :insufficient_storage
510 = :not_extended
```

## Exception handling
```ruby
class ApplicationController < ActionController::Base  
  rescue_from ApiExceptions::ObjectNotFound,
    :with => :render_error_response

  def render_error_response(e)
    render json: { message: e.message }, status: 404
  end    
end  
```


<https://www.thegreatcodeadventure.com/rails-api-painless-error-handling-and-rendering-2/>

## Serializers

### Include serialize helpers
`include ActiveModel::Serializers::JSON`  
<https://www.rubydoc.info/gems/activemodel/5.1.5/ActiveModel/Serializers/JSON>  


### Serializer object
<https://blog.codeship.com/building-a-json-api-with-rails-5/>  
<https://github.com/rails-api/active_model_serializers/tree/v0.10.6/docs >  
```ruby
class RentalUnitSerializer < ActiveModel::Serializer
  attributes :id, :address, :rooms, :bathrooms, :price, :price_per_room,
  belongs_to :user
end
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username

  def name
    names = object.name.split(" ")
    "#{names[0].first}. #{names[1][7]}"
  end

  def username
    instance_options[:user_name]
  end
end
# usage
render json: @user, user_name: 'admin', serializer: UserSerializer, status: 200
# for list
render json: User.all, each_serializer: UserSerializer, status: 200
```

## Using json:api
<https://blog.codeship.com/the-json-api-spec/>
