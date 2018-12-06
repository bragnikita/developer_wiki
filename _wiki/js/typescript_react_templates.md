---
title: Typescript+React templates
categories:
  - typescript
  - template
---

```typescript
import * as React from 'react';
import {ChangeEvent} from "react";

export interface IProps {
    greeting: string;
    color?: string;
}

interface IState {
    name: string;
}

export default class MyClassForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: ''
        }
    }

    public render() {
        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
            </div>
        )
    }

    private onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value;
        });
    }
}
```
