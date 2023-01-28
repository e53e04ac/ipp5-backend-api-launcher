/*!
    @e53e04ac/ipp5-backend-api-launcher/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { AzureTerraformer } from 'azure-terraformer';
import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';
import { Ipp5BackendApiEnvMap } from 'ipp5-types';

export declare namespace Ipp5BackendApiLauncher {

    type EnvMap = Ipp5BackendApiEnvMap;

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly az: ValueOrGet<string>;
        readonly docker: ValueOrGet<string>;
        readonly tmpDirectory: ValueOrGet<FileEntry>;
        readonly launchId: ValueOrGet<string>;
        readonly containerImageName: ValueOrGet<string>;
        readonly containerTimezoneId: ValueOrGet<string>;
        readonly containerAppPort: ValueOrGet<number>;
        readonly acrSubscription: ValueOrGet<string>;
        readonly acrName: ValueOrGet<string>;
        readonly webappSubscription: ValueOrGet<string>;
        readonly webappResourceGroup: ValueOrGet<string>;
        readonly webappName: ValueOrGet<string>;
        readonly webappDeploymentContainerImageName: ValueOrGet<string>;
        readonly backendApiUrn: string;
        readonly backendApiHttpPathPrefix: string;
        readonly containerBackendMountPath: string;
        readonly backendIdpTokenUrn: string;
        readonly backendIdpTokenPublicKey: string;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly scriptFile: Get<FileEntry>;
        readonly scriptDirectory: Get<FileEntry>;
        readonly runDirectory: Get<FileEntry>;
        readonly settingsJson: Get<FileEntry>;
        readonly azureTerraformer: Get<AzureTerraformer>;
        readonly makeSettingsJson: Get<Promise<void>>;
        readonly runAzAcrLogin: Get<Promise<void>>;
        readonly runDockerImageTag: Get<Promise<void>>;
        readonly runDockerImagePush: Get<Promise<void>>;
        readonly runAzWebappConfigAppsettingsSet: Get<Promise<void>>;
        readonly runAzWebappRestart: Get<Promise<void>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5BackendApiLauncher: Get<_Self>;
        readonly launch: Get<Promise<void>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5BackendApiLauncher = Ipp5BackendApiLauncher.Self;

export declare const Ipp5BackendApiLauncher: Ipp5BackendApiLauncher.ConstructorWithCompanion;
