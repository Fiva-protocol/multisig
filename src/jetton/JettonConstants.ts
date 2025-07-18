import {crc32} from "../utils/crc32";

export abstract class Op {
    static transfer = 0xf8a7ea5;
    static transfer_notification = 0x7362d09c;
    static internal_transfer = 0x178d4519;
    static excesses = 0xd53276db;
    static burn = 0x595f07bc;
    static burn_notification = 0x7bdd97de;
    
    static provide_wallet_address = 0x2c76b973;
    static take_wallet_address = 0xd1735400;
    static mint = 0x642b7d07;
    static change_admin = 0x4840664f;
    static claim_admin = 0xfb88e119;
    static change_max_total_supply = 0xc13bd793;
    static upgrade = 0x2508d66a;
    static call_to = 0x235caf52;
    static top_up = 0xd372158c;
    static change_metadata_url = 0xcb862902;
    static set_status = 0xeed236d3;
    static nft_transfer = 0x5fcc3d14;
}

export abstract class Errors {
    static invalid_op = 72;
    static wrong_op = 0xffff;
    static not_owner = 73;
    static not_valid_wallet = 74;
    static wrong_workchain = 333;
    
    static contract_locked = 45;
    static balance_error = 47;
    static not_enough_gas = 48;
    static invalid_mesage = 49;
    static discovery_fee_not_matched = 75;
}

export const ACROp = {
    update_suspend: crc32('update_suspend'),
    change_owner: crc32('change_owner'),
    change_maintainer: crc32('change_maintainer'),
    change_treasury: crc32('change_treasury'),
    change_maturity: crc32('change_maturity'),
    change_index_updater: crc32('change_index_updater'),
    update_protocol_fee: crc32('update_protocol_fee'),
    fee_payout: crc32('fee_payout'),
    change_pool_address: crc32('change_pool_address'),
    withdraw_pt_tons: crc32('withdraw_pt_tons'),
};

