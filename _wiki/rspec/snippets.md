---
category: rspec
---

# Snippets

## Simple
```ruby
require 'rails_helper'

RSpec.describe "context name" do
	describe 'sub-context' do
		let(:var) { new Date() }
		before { puts "Starting" }
		it 'should be today' do
			expect(var.day).to eq(Date.today().day)
		end
	ebd
end

```

## Аутентификация: JWT
```ruby
require 'jwt'
# ...
before do
   token = JWT.encode({user: User.first.id},
      ENV["AUTH_SECRET"], "HS256")
    header "Authorization", "Bearer #{token}"
    get "/hobbies/-1"
end
```
