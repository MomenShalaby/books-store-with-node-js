exports.quriesList ={
    GET_STORE_LIST_QUERY : 'SELECT store_id, store_name, store_code, store_address, created_on, created_by FROM bms.store',

    CREATE_STORE_QUERY : 'INSERT INTO bms.store (store_name, store_code, store_address, created_on, created_by) VALUES($1, $2,$3, $4,$5)',

    UPDATE_STORE_QUERY : "UPDATE bms.store SET store_name=$1, store_address=$2, created_on=$3, created_by=$4 WHERE store_id=$5",

    GET_STORE_ID_QUERY:'SELECT COUNT(store_id) FROM bms.store WHERE store_id = $1;',

    DELETE_STORE_QUERE:'DELETE FROM bms.store WHERE store_id=$1;'




}

// exports.queries = {
//     GET_STORE_LIST: 'SELECT STORE_ID, STORE_NAME, store_code, store_address FROM BMS.STORE ',
//     CREATE_STORE: 'INSERT INTO BMS.STORE(STORE_NAME,  STORE_CODE, STORE_ADDRESS,CREATED_ON, CREATED_BY) VALUES($1, $2,$3,$4,$5 )'

// }