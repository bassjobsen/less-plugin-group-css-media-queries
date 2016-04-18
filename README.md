less-group-css-media-queries
========================

Adds the ability for less to be post-processed by group-css-media-queries

## lessc usage

Use in lessc by installing

```
npm install -g less-plugin-group-css-media-queries
```

and then on the command line,

```
lessc file.less --group-css-media-queries
```

## Programmatic usage

```
var LessPluginGroupMediaQueries = require('less-plugin-group-css-media-queries'),
    lessGroupPlugin = new LessPluginGroupMediaQueries();
less.render(lessString, { plugins: [lessGroupPlugin] })
  .then(
```
