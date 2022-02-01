const fs = require("fs");

/** 各任意ファイルの作成要否を入力 */
const CREATE_FACADE = true;
const CREATE_PARAMS = true;
const CREATE_PRESENTER = true;

/** コマンドライン引数を受け取り */
const { argv } = process;
const group = argv[2].toLowerCase();
const feature = argv[3].toLowerCase();
const upperCamelCase =
  group.slice(0, 1).toUpperCase() + group.slice(1) + feature.slice(0, 1).toUpperCase() + feature.slice(1);

/** pages へのパス */
const BASE_PATH = "./src/pages";
/** ファイル名の prefix を設定 */
const filePrefix = `${group}-${feature}`;
/** ファイル作成先のパスを設定 */
const dir = `${BASE_PATH}/${group}/${filePrefix}`;

/** ディレクトリが未作成であれば作成する */
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

/** ファイル作成関数定義 */
const createFile = (dir, fileName, content) => {
  fs.writeFileSync(`${dir}/${fileName}`, content, "utf-8", (err) => {
    if (err) console.error(err);
  });
  console.log(`[CREATED] ${dir}/${fileName}`);
};

/** index.ts ファイル作成 */
createFile(
  dir,
  `index.ts`,
  `import { lazy } from 'react';

export const ${upperCamelCase}Page = lazy(() => import('./${filePrefix}.page').then((m) => ({ default: m.${upperCamelCase}Page })));
`
);

/** component ファイル作成 */
createFile(
  dir,
  `${filePrefix}.component.tsx`,
  `import { memo } from 'react';

interface Props {}

export const ${upperCamelCase} = memo((props: Props) => {
  return <></>;
});  
`
);

/** component.spec ファイル作成 */
createFile(
  dir,
  `${filePrefix}.component.spec.tsx`,
  `import { ${upperCamelCase} } from './${filePrefix}.component'

describe("${upperCamelCase}", () => {});
`
);

/** container ファイル作成 */
createFile(
  dir,
  `${filePrefix}.container.tsx`,
  `import { memo } from 'react';

import { ${upperCamelCase} } from './${filePrefix}.component';
import { use${upperCamelCase}Facade } from './${filePrefix}.facade';

export const ${upperCamelCase}Container = memo(() => {
  const {} = use${upperCamelCase}Facade();

  return <${upperCamelCase} />;
});
`
);

/** container.spec ファイル作成 */
createFile(
  dir,
  `${filePrefix}.container.spec.tsx`,
  `import { ${upperCamelCase}Container } from './${filePrefix}.container'

describe("${upperCamelCase}Container", () => {});
`
);

if (CREATE_FACADE) {
  /** facade ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.facade.ts`,
    `import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const use${upperCamelCase}Facade = () => {
  const dispatch = useDispatch<ThunkDispatch<unknown, undefined, AnyAction>>();

  useEffect(() => {}, []);

  return {} as const;
};
`
  );

  /** facade.spec ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.facade.spec.ts`,
    `import { use${upperCamelCase}Facade } from './${filePrefix}.facade'

describe("use${upperCamelCase}Facade", () => {});
`
  );
}

/** page ファイル作成 */
createFile(
  dir,
  `${filePrefix}.page.tsx`,
  `import { memo } from 'react';

import { ${upperCamelCase}Container } from './${filePrefix}.container';
import { use${upperCamelCase}Params } from './${filePrefix}.params';

export const ${upperCamelCase}Page = memo(() => {
  const { hoge } = use${upperCamelCase}Params();
  return <${upperCamelCase}Container />;
});
`
);

/** page.spec ファイル作成 */
createFile(
  dir,
  `${filePrefix}.page.spec.tsx`,
  `import { ${upperCamelCase}Page } from './${filePrefix}.page'

describe("${upperCamelCase}Page", () => {});
`
);

if (CREATE_PARAMS) {
  /** params ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.params.tsx`,
    `import { useLocation } from 'react-router-dom';

export const use${upperCamelCase}Params = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hogeParam = params.get("hoge") || "";

  return {
    hoge: hogeParam,
  } as const;
};
`
  );

  /** params.spec ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.params.spec.tsx`,
    `import { use${upperCamelCase}Params } from './${filePrefix}.params'

describe("use${upperCamelCase}Params", () => {});
`
  );
}

if (CREATE_PRESENTER) {
  /** presenter ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.presenter.ts`,
    `export const use${upperCamelCase}Presenter = (arg: {}) => {
      return {} as const;
    };
    `
  );

  /** presenter.spec ファイル作成 */
  createFile(
    dir,
    `${filePrefix}.presenter.spec.tsx`,
    `import { use${upperCamelCase}Presenter } from './${filePrefix}.presenter'

describe("use${upperCamelCase}Presenter", () => {});
`
  );
}
