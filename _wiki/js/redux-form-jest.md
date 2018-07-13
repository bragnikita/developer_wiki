---
title: 'Redux Forms depended components integration testing with jest and react-test-utils'
categories:
  - js
keywords: reactjs, jest, testing, redux-forms  
---

```javascript
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-addons-test-utils';
import { combineReducers, createStore } from 'redux';
import { Field, reducer, reduxForm } from 'redux-form';

class TestInput extends Component {
  render() {
    return <div>TEST INPUT</div>
  }
}

class Form extends Component {
  render() {
    return <div>
      <Field name="foo" component={TestInput} />
    </div>
  }
}

const makeStore = initial =>
  createStore(combineReducers({ form: reducer }), { form: initial });

const testProps = (state, config = {}) => {
  const store = makeStore({ 'formName': state });

  const TestForm = reduxForm({ form: 'formName', ...config })(Form);
  const dom = ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <TestForm />
    </Provider>,
  );
  return ReactTestUtils.findRenderedComponentWithType(dom, TestInput).props
};

describe('test', () => {
  it('should get value from Redux state', () => {
    const props = testProps({
      values: {
        foo: 'bar',
      },
    });
    expect(props.input.value).toBe('bar')
  });

});
```
