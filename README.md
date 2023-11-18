# NestJS Monorepo Watch Issue

This repository showcases an issue I have to watch on code changes in a monorepo with Typescript and nestjs.

#### Repository Structure
Each branch in this repository has a different approach in structuring the monorepo.

##### main
Typescript only approach with two packages using "tsc -b -w" as dev scripts.
"module2" has "references" to "module1" in its tsconfig.json.

_Result: "module2" is recompiled and restarted when "module1" is changed._

##### nestjs
* Monorepo with nestjs and two packages. Packages using "tsc -b -w" as dev scripts and nestjs using "nest start --watch" as dev script.
* "module2" and "nest-app" have "references" to "module1" in its tsconfig.json.

_Result: "module2" is recompiled and restarted when "module1" is changed but "nest-app" is not._

##### nestjs-with-path-mapping
* Monorepo with nestjs and two packages. Packages using "tsc -b -w" as dev scripts and nestjs using "nest start --watch" as dev script.
* "module2" and "nest-app" have a path mapping to "module1" in its tsconfig.json.
* Internal package "module1" is **not** installed by the dependencies in the package.json of "nest-app" and "module2"

_Result: neither "module2" nor "nest-app" are recompiled and restarted when "module1" is changed._

#### How to use

```bash
npm i
```

```bash
npm run dev
```