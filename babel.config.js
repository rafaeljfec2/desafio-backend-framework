module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        // aqui que ensinamos ele onde buscar os imports
       // e também ja podemos ter uma ideia de como irá ficar nossa estrutura de pastas
        alias: {
          '@entities': 'src/entities',
          '@infraestructure': 'src/infraestructure',
          '@usecases': 'src/usecases',
          '@shared': 'src/shared'
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
