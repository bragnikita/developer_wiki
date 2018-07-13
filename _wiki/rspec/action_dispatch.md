---
category: rspec
---

# Controllers integration tests

* ActionDispatch::TestResponse
* ActionDispatch::Request

```ruby
require 'rails_helper'

RSpec.describe UsersController, type: :request do
  it 'gets the list of all registered users' do
    get "/users"
    expect(response.content_type).to eq('application/json')
    expect(response).to have_http_status(200)
  end
end


```
