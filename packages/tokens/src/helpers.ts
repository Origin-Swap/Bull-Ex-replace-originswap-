import { ChainId } from '@pancakeswap/sdk'
import { TokenAddressMap } from '@pancakeswap/token-lists'

/**
 * An empty result, useful as a default.
 */
export const EMPTY_LIST: TokenAddressMap<ChainId> = {
  [ChainId.ETHEREUM]: {},
  [ChainId.RINKEBY]: {},
  [ChainId.GOERLI]: {},
  [ChainId.BSC]: {},
  [ChainId.BSC_TESTNET]: {},
  [ChainId.CORE]: {},
  [ChainId.VANAR]: {},
  [ChainId.SIRE_TESTNET]: {},
  [ChainId.SIRE_MAINNET]: {},
}

export function serializeTokens(unserializedTokens) {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: unserializedTokens[key].serialize }
  }, {} as any)

  return serializedTokens
}
