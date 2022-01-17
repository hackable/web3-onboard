import {
  RequestPatch,
  EventCallback,
  AccountSelectAPI,
  SelectAccountOptions,
  BasePath,
  DerivationPath,
  Asset,
  ScanAccounts,
  ScanAccountsOptions,
  AccountAddress,
  Account,
  AccountsList,
  AppMetadata,
  RecommendedInjectedWallets,
  WalletInit,
  WalletHelpers,
  WalletExclusions,
  InjectedWalletOptions,
  APIKey,
  Device,
  WalletModule,
  GetInterfaceHelpers,
  InjectedWalletModule,
  Platform,
  DeviceOS,
  DeviceBrowser,
  DeviceOSName,
  DeviceBrowserName,
  DeviceType,
  ChainId,
  RpcUrl,
  WalletInterface,
  ProviderMessage,
  ProviderInfo,
  ProviderAccounts,
  ProviderEvent,
  SimpleEventEmitter,
  ConnectListener,
  DisconnectListener,
  MessageListener,
  ChainListener,
  AccountsListener,
  Balance,
  EthAccountsRequest,
  EthChainIdRequest,
  EthBalanceRequest,
  EIP1102Request,
  EIP3085Request,
  EIP3326Request,
  AddChainParams,
  EIP1193Provider,
  MeetOneProvider,
  BinanceProvider,
  InjectedNameSpace,
  CustomWindow,
  InjectedProvider,
  ProviderRpcErrorCode,
  Chain,
  TokenSymbol,
  CustomNetwork
} from './types'

import { ProviderIdentityFlag, ProviderLabel } from './types'

export { ErrorCodes, ProviderRpcError } from './errors'
export { createEIP1193Provider } from './eip-1193'
export { default as accountSelect } from './account-select'
export { entryModal } from './entry-modal'

export { ProviderIdentityFlag, ProviderLabel, InjectedNameSpace }

export type {
  RequestPatch,
  EventCallback,
  AccountSelectAPI,
  SelectAccountOptions,
  BasePath,
  DerivationPath,
  Asset,
  ScanAccounts,
  ScanAccountsOptions,
  AccountAddress,
  Account,
  AccountsList,
  AppMetadata,
  RecommendedInjectedWallets,
  WalletInit,
  WalletHelpers,
  WalletExclusions,
  InjectedWalletOptions,
  APIKey,
  Device,
  WalletModule,
  GetInterfaceHelpers,
  InjectedWalletModule,
  Platform,
  DeviceOS,
  DeviceBrowser,
  DeviceOSName,
  DeviceBrowserName,
  DeviceType,
  ChainId,
  RpcUrl,
  WalletInterface,
  ProviderMessage,
  ProviderInfo,
  ProviderAccounts,
  ProviderEvent,
  SimpleEventEmitter,
  ConnectListener,
  DisconnectListener,
  MessageListener,
  ChainListener,
  AccountsListener,
  Balance,
  EthAccountsRequest,
  EthChainIdRequest,
  EthBalanceRequest,
  EIP1102Request,
  EIP3085Request,
  EIP3326Request,
  AddChainParams,
  EIP1193Provider,
  MeetOneProvider,
  BinanceProvider,
  CustomWindow,
  InjectedProvider,
  ProviderRpcErrorCode,
  Chain,
  TokenSymbol,
  CustomNetwork
}
