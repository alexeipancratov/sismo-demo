// SPDX-License-Identifier: None
pragma solidity ^0.8.18;

import "@sismo-core/sismo-connect-solidity/contracts/libs/SismoLib.sol";

contract SismoConnectDemo is SismoConnect {
    bytes16 public constant APP_ID = 0x000;

    constructor()
        SismoConnect(buildConfig(APP_ID))
    {}

    function verifyProofs(bytes memory response) public {
        SismoConnectVerifiedResult memory result = verify({
            responseBytes: response,
            auth: buildAuth({authType: AuthType.VAULT})
        });

        // require(result.verified, "SismoConnect: not verified");
    }
}