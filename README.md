# ipp5-backend-api-launcher

~~~~~ sh
npm install e53e04ac/ipp5-backend-api-launcher
~~~~~

~~~~~ mjs
import { Ipp5BackendApiLauncher } from 'e53e04ac/ipp5-backend-api-launcher';
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
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/4ec6e0e9ac76a0a385028e6e334c9ca882f12e67";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/684f3b21090807e48917ae6591611f4eb2b1e661";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/d18fec26c8d54d028c89fe513c9e51f713867e44";
  click B_3 "https://github.com/e53e04ac/hold/tree/67e5b60f9bb3221f8b200107c13e89a604a93631";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/eb9b340b50a6a171cda08fa63be4e647bd77caba";
  click B_6 "https://github.com/e53e04ac/ipp5-types/tree/6f3ee419d7cf5ae7f689bd79bde869f462fe30aa";
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
    E_0(["Ipp5BackendApiLauncher"]);
    E_1(["Ipp5BackendApiLauncher"]);
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
~~~~~
