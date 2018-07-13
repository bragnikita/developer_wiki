---
category: reactjs
keywords: reactjs, react, enzyme
---


## Enzyme: lookup for child components
```javascript
import { shallow } from 'enzyme';
const lookUpComponent = (component, options, predicate) => {
  let root;
  if (!component.type()) {
    return undefined;
  }
  if (typeof component.type() === 'string') {
    root = component;
  } else if (!component instanceof ShallowWrapper) {
    root = shallow(component, options);
  } else {
    root = component;
  }
  if (predicate(root)) {
    return root;
  }
  if (typeof root.type() === 'string') {
    const children = root.children();
    for (let i = 0; i < children.length; ++i) {
      const result = lookUpComponent(root.childAt(i), options, predicate);
      if (result) {
        return result;
      }
    }
    return undefined;
  } else {
    return lookUpComponent(root.dive(), options, predicate);
  }
};
```
