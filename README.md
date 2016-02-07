less-group-css-media-queries
========================

Adds the ability for less to be post-processed by group-css-media-queries

Use in lessc by installing

## lessc usage

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
    lessGroupPlugin = new LessPluginGroupMediaQueries({advanced: true});
less.render(lessString, { plugins: [lessGroupPlugin] })
  .then(
```
