---
title: Typescript
category: js
---
```
// Primitive types: number, string, boolean, symbol, null, or undefined

let a: string = 'Hello';
let arr: number[] = [1,2,3];
let tuple: [number,string] = [12,'somth'];
const cat = "Kitty"

enum Color {Red=1, Green}
let colorName = Color[2]
let c: Color = Color.Green

// Object type
let o: object = { prop: 0 };

// Any (any)
// Can call any methods, no compile-time type-checks
let someVal: any = 4; // can assign any type

// Void (void)
// return type of void function

// Never (never)
// return type of function that never returns (throws Exception)

// Type assertions
let someVal: any = 'string type';
let strLen: number = (someVal as string).length;
let strLen: number = (<string>someVal).length;

//Destructuring
let [one,,four, ...rest] = [1,2,4,10,12,13] //can skip
let {a, b} = {a:"aaa", b:"bbb"};
let {a: newA, b: newB} = {a:"aaa", b:"bbb"}; //renaming: creates newA and newB vars
let {a, b="default"} = {a:"aaa", b:"bbb"};
function f([f,s]:[number,string]) {} //call with f([1,'aaa'])
function f({a,b=0} = {a: ""}):void {} // f({a:'yes'}) and f() are OK

```
## Interfaces
```typescript
function f(obj: { label: string }) {} //anonymous

interface LabelValue {
  label: string;
  comment?: number; //optional parameter
  readonly id: number; //can assign only during initialization like const
  translate(lang: string): string;
}
function f(obj: LabelValue) {} //call with f({label: "text"})

interface FuncSignature { //allow call this as f(10,1000)
  (id: number, timeout: number): object
}
interface StringArray { //allow arr[10] notation
  [index: number]: string;
}
```

## Classes
```typescript
interface HasId {
  readonly id: number;
}
interface ClockInterface extends HasId{  
  currentTime: Date;
  setTime(d: Date);
}
abstract class Ticker {
  abstract tick(): void;
  reset(): void {} //
}
class Clock extends Ticker implements ClockInterface {
  static scale = 'seconds';
  currentTime: Date;
  public setTime(d: Date) {
    this.currentTime = d;
  }
  private _comment: string;
  set comment(comment: string) { this._comment = comment } //getters and setters for property
  get comment(): string { return this._comment }
  tick(): void { }
  constructor(readonly id: number) { super(); } //auto declaration and initialization of the class member "id"
}
```

## Functions
```typescript
// rest parameters
function buildIt(val: number, ...options: any[]): void {}
```

## Generics
```typescript
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn = identity;

//Constraints
interface HasLength {
  length: number;
}
function loggingIdent<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//Using generic function for class instance creation
function createInstance<A extends Animal>(c: new () => A): A { //constructor signature
    return new c();
}
```

# Export/Import
### Resolution
[Ref](https://www.typescriptlang.org/docs/handbook/module-resolution.html)  
compiler flag `--moduleResolution Classic | Node`
* .ts/.tsx and .d.ts files
* relative import starts with /,./,../ (can not use for an ambient module declaration)
* non-relative (relative to `baseUrl`) => walks up the dir tree (Classic) or Node module resolution strategy is used

Path mapping in `tsconfig.json`:  
```
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // This mapping is relative to "baseUrl",
      "*": [
        "*",
        "generated/*"
      ] //specifies roots for any other non-relative imports
    }
  }
}
```

- `rootDirs` does the same, but for relative imports
- `--traceResolution` for debug

### Importing non-TS libraries

```typescript
// interface declaration file (node.d.ts)
declare module "url" {
  export interface Url {
    pathname?: string;
  }
  export function parse(urlStr: string): Url;
  // shorthand for quick import (all types will be "any")
  declare module "hot-new-module";
}
// ...declare other modules

// in library importing file we are using reference tag

/// <reference path="node.d.ts" />
import * as URL from 'url' //actual import
```

## Advanced
### Triple-Slash Directrive [(Ref)](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
`/// <reference path="..." />` adds other file to the compilation files set
