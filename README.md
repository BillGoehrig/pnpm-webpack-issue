This repository demonstrates an issue with pnpm, described here.

Basically, if you install this with `npm`:
```
npm install
npm run build
```

webpack will build sucessfully.  However, if you use `pnpm`:

```
pnpm install
npm run build
```

webpack fails with the following errors:

```

ERROR in ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.scss (./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.scss)
Module not found: Error: Can't resolve '../../../../../../@bentley' in '...\pnpm-webpack-issue\node_modules\.registry.npmjs.org\@bentley\ui-ninezone\0.171.0\@bentley!ui-core@0.171.0\node_modules\@bentley\ui-ninezone\lib\toolbar'
 @ ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.scss (./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.scss) 2:14-311
 @ ./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.js
 @ ./node_modules/.local/...%2Fpnpm-webpack-issue%2FotherPackage%2Fsome-other-package-0.0.1.tgz/node_modules/some-other-package/index.js
 @ ./main.js

ERROR in ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Items.scss (./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Items.scss)
Module not found: Error: Can't resolve '../../../../../../@bentley' in '...\pnpm-webpack-issue\node_modules\.registry.npmjs.org\@bentley\ui-ninezone\0.171.0\@bentley!ui-core@0.171.0\node_modules\@bentley\ui-ninezone\lib\toolbar'
 @ ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Items.scss (./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Items.scss) 2:14-309
 @ ./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Items.js
 @ ./node_modules/.registry.npmjs.org/@bentley/ui-ninezone/0.171.0/@bentley!ui-core@0.171.0/node_modules/@bentley/ui-ninezone/lib/toolbar/Toolbar.js
 @ ./node_modules/.local/...%2Fpnpm-webpack-issue%2FotherPackage%2Fsome-other-package-0.0.1.tgz/node_modules/some-other-package/index.js
 @ ./main.js

```

I believe this is because pnpm is creating a directory named `@bentley!ui-core@0.171.0`, but the `!` character conflicts with webpack, as it is used as a delimeter between loaders and resources.

