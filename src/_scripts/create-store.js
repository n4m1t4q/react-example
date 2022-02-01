const fs = require("fs");

/** コマンドライン引数を受け取り */
const { argv } = process;
const feature = argv[2].toLowerCase();

/** store へのパス */
const BASE_PATH = "./src/store";
/** ファイル作成先のパスを指定 */
const dir = `${BASE_PATH}/${feature}`;

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
  `export * from "./${feature}.action";
export * from "./${feature}.reducer";
export * from "./${feature}.selector";
export * from "./${feature}.state";
`
);

/** action ファイル作成 */
createFile(
  dir,
  `${feature}.action.ts`,
  `import { createAsyncThunk } from '@reduxjs/toolkit';

import { featureKey } from './${feature}.state';
`
);

/** action.spec ファイル作成 */
createFile(
  dir,
  `${feature}.action.spec.ts`,
  `import { configureStore } from '@reduxjs/toolkit';

describe("${feature} action", () => {});
`
);

/** reducer ファイル作成 */
createFile(
  dir,
  `${feature}.reducer.ts`,
  `import { createReducer } from '@reduxjs/toolkit';

import * as actions from './${feature}.action';
import { initialState } from './${feature}.state';

export const reducer = createReducer(initialState, (builder) => {
  builder;
});
`
);

/** reducer.spec ファイル作成 */
createFile(
  dir,
  `${feature}.reducer.spec.ts`,
  `import * as actions from './${feature}.action';
import { reducer } from './${feature}.reducer';
import { initialState, State } from './${feature}.state';

describe("${feature} reducer", () => {});
`
);

/** selector ファイル作成 */
createFile(
  dir,
  `${feature}.selector.ts`,
  `import { createSelector } from '@reduxjs/toolkit';

import { featureKey, State } from './${feature}.state';

interface RootState {
  [featureKey]: State;
}

const featureStateSelector = (state: RootState) => state[featureKey];
`
);

/** selector.spec ファイル作成 */
createFile(
  dir,
  `${feature}.selector.spec.ts`,
  `import * as selectors from './${feature}.selector';
import { featureKey, initialState, State } from './${feature}.state';

interface RootState {
  [featureKey]: State;
}

describe("${feature} selector", () => {});
`
);

/** state ファイル作成 */
createFile(
  dir,
  `${feature}.state.ts`,
  `export const featureKey = "${feature}";

export interface State {}

export const initialState: State = {};
`
);
