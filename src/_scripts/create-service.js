const fs = require("fs");

/** コマンドライン引数を受け取り */
const { argv } = process;
const feature = argv[2].toLowerCase();
const upperCamelCase = feature.slice(0, 1).toUpperCase() + feature.slice(1);

/** services へのパス */
const BASE_PATH = "./src/services";
/** ファイル作成先のパスを設定 */
const dir = `${BASE_PATH}/`;

/** ディレクトリが未作成であれば作成する */
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

/** ファイル作成関数定義 */
const createFile = (dir, fileName, content) => {
  fs.writeFileSync(`${dir}/${fileName}`, content, "utf-8", (err) => {
    if (err) console.error(err);
  });
  console.log(`[CREATED] ${dir}/${fileName}`);
};

/** service ファイル作成 */
createFile(
  dir,
  `${feature}.service.ts`,
  `import { HttpClient } from 'shared/utils';

export class ${upperCamelCase}Service {
  constructor(private readonly http: HttpClient, private readonly baseUrl: string) {}
}
`
);

/** service.spec ファイル作成 */
createFile(
  dir,
  `${feature}.service.spec.ts`,
  `import { HttpClient } from 'shared/utils';

import { ${upperCamelCase}Service } from './${feature}.service';

describe("${upperCamelCase}Service", () => {
  const baseUrl = "http://localhost";
  const httpClient = new HttpClient();
  const ${feature}Service = new ${upperCamelCase}Service(httpClient, baseUrl);
});
`
);
