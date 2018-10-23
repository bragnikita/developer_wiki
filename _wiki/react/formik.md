---
title: Formik
category: react
keywords: react,forms
---
<https://jaredpalmer.com/formik/docs>  
Install `yarn add formik`

## API
### Formik

`Formik` params:
* onSubmit(values, actions)
* validate(values) -> map of errors/Promise

` Formik` exposes props:   
* handlers: { handleSubmit<(e), handleChange<(e), handleBlur<(e), handleReset<(),  }
* props: { values<{}, errors<{}, status<any, touched<{}, isSubmitting<b, isValidating<b, isValid<b }
* form manipulators: { validateForm<(), resetForm<(values map) }
* other props from FormicBag
* users's props

### FormikBag
  - injected props and methods { setSubmitting(bool), setErrors(map of error msgs), setStatus(any value), setFieldValue<(field, value, shouldValidate), setFieldTouched<(field, bool, shouldValidate), setTouched(map str->bool), setValues(map str->val)  }
  - resetForm<(values map)
  - users's props

### Fields
`Field` params:
* validate(value) -> error text/Promise
`Field` exposes props:
* field { onChange, onBlur, name, value }
* form : FormikBag

```javascript
<Field
  render={(props) => ReactNode}
  component={Component}
>
// JSX or callback {(props) => ReactNode}
</Field>  
```
### connect
HOC that allows to hook anything into the Formik's context  
```javascript
connect((props) => {
  const formErrors = props.formik.errors;
})
```

### Submitting
* handleSubmit вызывает `onSubmit(values, formicBag )` у Formik

#### Order
* before
  - touch all fields
  - isSubmitting -> true
  - submitCount + 1
* validation
  - isValidating -> true
  - run all field-level validations, validate and validationSchema, deeply merge results
  - if errors, abort submission, change flags
  - if not, go to submission
* submission
  - run onSubmit or handleSubmit
  - you must call `formicBag.setSubmitting(false)` in your handler to finish

## Basic pattern
```javascript
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;

```

## Using context

```javascript
//...
<Formik initialValues={...} onSubmit={...}>
{
  ({errors, touched, isSubmitting, handleSubmit}) => (
    <Form>
      <Field name="address.first" component={MyComponent}/>
      //...
      <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
    </Form>
  )
}
</Formik>
```
