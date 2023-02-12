# ipp5-backend-api-launcher

~~~~~ sh
npm install e53e04ac/ipp5-backend-api-launcher
~~~~~

~~~~~ mjs
import { Ipp5BackendApiLauncher } from 'e53e04ac/ipp5-backend-api-launcher';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/azure-terraformer"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/file-entry"]);
    B_6(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/14ffe4874a7df34767461a1e83418df00cd9bb40";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/93b9f205a7be92bb920d2d4f13efa78be7b4ba5d";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/d43936715ed35379b9739953facede178c870ef8";
  click B_3 "https://github.com/e53e04ac/hold/tree/b0b5ef032800af76c6e7ae27472dbf25a04a947d";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/c0427d9ba9c8481a9e2acf4af4e7aa46b96314a9";
  click B_6 "https://github.com/e53e04ac/ipp5-types/tree/86f5b3a08debb8d9d9e48753cecd00bfd5b4d6a2";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-api-launcher";
    E_0(["Ipp5BackendApiLauncher"]);
  end;
  M(["index.mjs"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry-native";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
    I_3_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-api-launcher";
    E_0(["namespace Ipp5BackendApiLauncher"]);
    E_1(["type Ipp5BackendApiLauncher"]);
    E_2(["const Ipp5BackendApiLauncher"]);
  end;
  M(["index.d.ts"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-types";
    I_4_0(["Ipp5BackendApiEnvMap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  M ----> I_4_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
