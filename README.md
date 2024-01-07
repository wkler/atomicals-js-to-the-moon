# AtomMoon Tool

> atomicals.xyz
> Documentation: https://docs.atomicals.xyz

## User guide
```
# Download the github repo:
git clone https://github.com/wkler/atomicals-js-to-the-moon.git
  
# Install node:
please navigate to nodejs official site

# Install yarn(If you don't have yarn installed):
npm install -g yarn

# Install node modules:
yarn install

# In .env file we can set RPC node.
selet RPC need remove the prefix "#" at that line.
ignore it need add prefix "#" at that line.

# Generate a new wallet
yarn cli wallet_init

# Or copy your wallet file to wallet folder. Dont forget backup it.(for example below)
cp someWhere/walletfile.json ./wallets/wallet.json

# Run mint dft command(single operation):
yarn cli mint-dft qubit --satsbyte 37

# Run mint dft command(multi auto operation and generate log.txt file in root dir):
./auto.sh qubit 55 5        (means mint qubit tiker and use 55 sats/vB and run 5 times)

See all commands at:
yarn run cli --help
```

### Quick Start - Command Line (CLI)

First install packages and build, then follow the steps here to create your first Atomical and query the status. Use `yarn cli`to get a list of all commands available.

#### 0. Environment File (.env)

The environment file comes with defaults (`.env.example`), but it is highly recommend to install and operate your own ElectrumX server. Web browser communication is possible through the `wss` (secure websockets) interface of ElectrumX.

```
ELECTRUMX_WSS=wss://electrumx.atomicals.xyz:50012

// Optional (defaults to wallet.json)
WALLET_PATH=path-to-wallet.json
```

_ELECTRUMX_WSS_: URL of the ElectrumX with Atomicals support. Note that only `wss` endpoints are accessible from web browsers.

#### 1. Wallet Setup

The purpose of the wallet is to create p2tr (pay-to-taproot) spend scripts and to receive change from the transactions made for the various operations. _Do not put more funds than you can afford to lose, as this is still beta!_

To initialize a new `wallet.json` file that will store your address for receiving change use the `wallet-init` command. Alternatively, you may populate the `wallet.json` manually, ensuring that the address at `m/44'/0'/0'/0/0` is equal to the address and the derivePath is set correctly.

Configure the path in the environment `.env` file to point to your wallet file. defaults to `./wallet.json`

Default:

```
WALLET_PATH=.
WALLET_FILE=wallet.json
```

Update to `wallets/` directory:

```
WALLET_PATH=./wallets
WALLET_FILE=wallet.json
```

Create the wallet:

```
yarn cli wallet-init

>>>

Wallet created at wallet.json
phrase: maple maple maple maple maple maple maple maple maple maple maple maple
Legacy address (for change): 1FXL2CJ9nAC...u3e9Evdsa2pKrPhkag
Derive Path: m/44'/0'/0'/0/0
WIF: L5Sa65gNR6QsBjqK.....r6o4YzcqNRnJ1p4a6GPxqQQ
------------------------------------------------------
```

#### 2. Explore the CLI

```
yarn cli --help
```
Read the documentation at https://docs.atomicals.xyz

## ElectrumX Server RPC Interface

See updated ElectrumX (https://github.com/atomicals/atomicals-electrumx)

## Any questions or ideas?

https://atomicals.xyz

https://x.com/atomicalsxyz (X - Formerly Twitter)
