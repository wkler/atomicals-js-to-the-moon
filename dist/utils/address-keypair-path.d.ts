export interface ExtendTaprootAddressScriptKeyPairInfo {
    address: string;
    tweakedChildNode: any;
    childNodeXOnlyPubkey: any;
    output: any;
    keyPair: any;
    path: string;
}
export declare const getExtendTaprootAddressKeypairPath: (phrase: string, path: string) => Promise<ExtendTaprootAddressScriptKeyPairInfo>;
export interface KeyPairInfo {
    address: string;
    output: any;
    childNodeXOnlyPubkey: any;
    tweakedChildNode: any;
    childNode: any;
}
export declare const getKeypairInfo: (childNode: any) => KeyPairInfo;
