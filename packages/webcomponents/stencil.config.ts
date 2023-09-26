import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// const angularValueAccessorBindings: ValueAccessorConfig[] = [];

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['br-input[type=text]'],
    event: 'myChange',
    targetAttr: 'value',
    type: 'text',
  },
];

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../../../node_modules/@govbr-ds/core/dist/core.min.css',
          dest: 'assets/styles/core.min.css',
          warn: true,
        },
        { src: '../src/pages/', dest: 'pages/', warn: true },
        { src: '../src/assets/images/', dest: 'assets/images/', warn: true },
      ],
    },
    angularOutputTarget({
      componentCorePackage: '@govbr-ds/webcomponents-stencil',
      outputType: 'component',
      directivesProxyFile:
        '../angular-workspace/projects/webcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/webcomponents-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        '../../node_modules/@govbr-ds/core/src/partial/scss/_base.scss',
        '../../node_modules/@govbr-ds/core/src/partial/scss/_tokens.scss',
        '../../node_modules/@govbr-ds/core/src/partial/scss/_utilities.scss',
      ],
    }),
  ],
};
