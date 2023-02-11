# ipp5-backend-api-launcher

~~~~~ sh
npm install e53e04ac/ipp5-backend-api-launcher
~~~~~

~~~~~ mjs
import { Ipp5BackendApiLauncher } from 'e53e04ac/ipp5-backend-api-launcher';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-backend-api-launcher"]);
  B0(["e53e04ac/azure-terraformer"]);
  B1(["e53e04ac/event-emitter"]);
  B2(["e53e04ac/file-entry"]);
  B3(["e53e04ac/file-entry-native"]);
  B4(["e53e04ac/hold"]);
  C0(["@types/node"]);
  C1(["e53e04ac/ipp5-types"]);
  click B0 href "https://github.com/e53e04ac/azure-terraformer";
  click B1 href "https://github.com/e53e04ac/event-emitter";
  click B2 href "https://github.com/e53e04ac/file-entry";
  click B3 href "https://github.com/e53e04ac/file-entry-native";
  click B4 href "https://github.com/e53e04ac/hold";
  click C1 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-backend-api-launcher";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
